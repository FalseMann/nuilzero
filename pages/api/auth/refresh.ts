import { NextApiRequest, NextApiResponse } from "next";
import {
  establishSession,
  REFRESH_TOKEN_COOKIE_NAME,
  TwitchTokenSetSchema,
} from "../../../lib/server/auth";
import { getClient } from "../../../lib/server/auth/client";
import { AuthenticationError } from "../../../lib/server/errors/AuthenticationError";
import { MethodNotAllowedError } from "../../../lib/server/errors/MethodNotAllowedError";
import { sendError, sendResponse } from "../../../lib/server/response";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  const client = await getClient();
  const refreshToken = req.cookies[REFRESH_TOKEN_COOKIE_NAME];

  if (req.method !== "POST") {
    return sendError(res, new MethodNotAllowedError());
  }

  if (refreshToken === undefined) {
    sendError(res, new AuthenticationError());
    return;
  }

  const tokenSet = TwitchTokenSetSchema.parse(
    await client.refresh(refreshToken)
  );

  await establishSession(res, tokenSet);

  sendResponse(res, { success: true });
}
