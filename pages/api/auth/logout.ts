import type { NextApiRequest, NextApiResponse } from "next";
import {
  expireCookie,
  SESSION_TOKEN_COOKIE_NAME,
  REFRESH_TOKEN_COOKIE_NAME,
} from "../../../lib/server/auth";
import { MethodNotAllowedError } from "../../../lib/server/errors/MethodNotAllowedError";
import { sendError, sendResponse } from "../../../lib/server/response";

interface Response {
  success: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method !== "POST") {
    sendError(res, new MethodNotAllowedError());
    return;
  }

  res.setHeader("Set-Cookie", [
    expireCookie(SESSION_TOKEN_COOKIE_NAME),
    expireCookie(REFRESH_TOKEN_COOKIE_NAME, { path: "/api/auth/refresh" }),
  ]);
  sendResponse(res);
}
