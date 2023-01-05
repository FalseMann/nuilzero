import { Client, Issuer } from "openid-client";
import config from "../config";

let client: Client;

export const callbackUrl = "http://localhost:3000/api/auth/callback";
export const identityProvider = "https://id.twitch.tv/oauth2";

export async function getClient(): Promise<Client> {
  if (!client) {
    const issuer = await Issuer.discover(identityProvider);
    client = new issuer.Client({
      client_id: config.twitch.clientId,
      client_secret: config.twitch.clientSecret,
      redirect_uris: [callbackUrl],
    });
  }

  return client;
}
