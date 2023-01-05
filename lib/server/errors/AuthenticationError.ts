import { ApiError } from "../response";

export class AuthenticationError extends ApiError {
  constructor(message = "There was an error authenticating with Twitch") {
    super(message);
    this.name = "AuthenticationError";
  }

  statusCode = 401;
}
