import type { NextApiRequest, NextApiResponse } from "next";
import {
  establishSession,
  TwitchTokenSetSchema,
} from "../../../lib/server/auth";
import { callbackUrl, getClient } from "../../../lib/server/auth/client";
import { AuthenticationError } from "../../../lib/server/errors/AuthenticationError";
import { ApiError, sendError } from "../../../lib/server/response";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiError>
) {
  const client = await getClient();

  try {
    const params = client.callbackParams(req);
    const tokenSet = TwitchTokenSetSchema.parse(
      await client.callback(callbackUrl, params)
    );

    await establishSession(res, tokenSet);

    res.redirect("/");
  } catch (error) {
    sendError(res, new AuthenticationError());
  }
}
