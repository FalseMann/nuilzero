import { NextApiRequest, NextApiResponse } from "next";
import { generators } from "openid-client";
import { getClient } from "../../../lib/server/auth/client";

const CODE_CHALLENGE_METHOD = "S256";
const RESOURCE_URL = "https://api.twitch.tv/helix/users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  const client = await getClient();

  const codeVerifier = generators.codeVerifier();
  const codeChallenge = generators.codeChallenge(codeVerifier);

  const url = client.authorizationUrl({
    scope: "openid",
    resource: RESOURCE_URL,
    code_challenge: codeChallenge,
    code_challenge_method: CODE_CHALLENGE_METHOD,
    claims: {
      userinfo: {
        picture: null,
        preferred_username: null,
      },
    },
  });

  res.redirect(url);
}
