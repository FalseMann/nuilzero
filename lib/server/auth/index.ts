import { User } from "@prisma/client";
import cookie from "cookie";
import { jwtVerify, SignJWT } from "jose";
import { nanoid } from "nanoid";
import { NextApiResponse } from "next";
import { z } from "zod";
import config from "../../../lib/server/config";
import { prisma } from "../db/clients/postgres";
import { getClient } from "./client";

export const REFRESH_TOKEN_MAX_AGE = 60 * 60 * 24 * 7; // 1 week
export const REFRESH_TOKEN_COOKIE_NAME = "refresh_token";

export const SESSION_TOKEN_MAX_AGE = 60 * 15; // 15 minutes
export const SESSION_TOKEN_COOKIE_NAME = "session_token";

export const TwitchTokenSetSchema = z.object({
  access_token: z.string(),
  expires_at: z.number(),
  refresh_token: z.string(),
  scope: z.array(z.string()),
  token_type: z.string(),
});

export type TwitchTokenSet = z.infer<typeof TwitchTokenSetSchema>;

export interface UserInfo {
  exp: number;
  picture: string;
  preferred_username: string;
}

export function createCookie(
  name: string,
  value: string,
  options: cookie.CookieSerializeOptions = {}
) {
  return cookie.serialize(name, value, {
    httpOnly: true,
    path: "/",
    secure: config.env.vercel !== "local",
    sameSite: "strict",
    ...options,
  });
}

export function expireCookie(
  name: string,
  options: cookie.CookieSerializeOptions = {}
) {
  return createCookie(name, "", { maxAge: -1, ...options });
}

export function createSessionJwt(user: User): Promise<string> {
  const jwt = new SignJWT(user)
    .setProtectedHeader({ alg: "HS256" })
    .setJti(nanoid())
    .setIssuedAt()
    .sign(new TextEncoder().encode(config.auth.sessionToken.secret));

  return jwt;
}

export async function establishSession(
  res: NextApiResponse,
  tokenSet: TwitchTokenSet
) {
  const client = await getClient();
  const info = await client.userinfo<UserInfo>(tokenSet.access_token);
  const user = {
    id: info.sub,
    username: info.preferred_username,
    avatar: info.picture,
  };

  await upsertUser(user);
  const sessionToken = await createSessionJwt(user);

  res.setHeader("Set-Cookie", [
    createCookie(SESSION_TOKEN_COOKIE_NAME, sessionToken, {
      maxAge: SESSION_TOKEN_MAX_AGE,
    }),
    createCookie(REFRESH_TOKEN_COOKIE_NAME, tokenSet.refresh_token, {
      maxAge: REFRESH_TOKEN_MAX_AGE,
      path: "/api/auth/refresh",
    }),
  ]);
}

const UserPayloadSchema = z.object({
  id: z.string(),
  username: z.string(),
  avatar: z.string(),
});

/**
 * Given a JWT, decrypt it and return a User
 */
export async function getUserFromToken(token: string): Promise<User> {
  const decoded = await jwtVerify(
    token,
    new TextEncoder().encode(config.auth.sessionToken.secret)
  );
  const payload = UserPayloadSchema.parse(decoded.payload);

  return {
    id: payload.id,
    username: payload.username,
    avatar: payload.avatar,
  };
}

function upsertUser(user: User) {
  return prisma.user.upsert({
    where: {
      id: user.id,
    },
    create: {
      id: user.id,
      username: user.username,
      avatar: user.avatar,
    },
    update: {
      username: user.username,
      avatar: user.avatar,
    },
  });
}
