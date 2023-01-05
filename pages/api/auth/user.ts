import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import {
  getUserFromToken,
  SESSION_TOKEN_COOKIE_NAME,
} from "../../../lib/server/auth";
import { ErrorResponse, sendError } from "../../../lib/server/response";
import { AuthenticationError } from "../../../lib/server/errors/AuthenticationError";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | ErrorResponse>
) {
  const sessionToken = req.cookies[SESSION_TOKEN_COOKIE_NAME];

  if (sessionToken === undefined) {
    return sendError(
      res,
      new AuthenticationError("You are not authenticated. Please log in.")
    );
  }

  const user = await getUserFromToken(sessionToken);

  res.send(user);
}
