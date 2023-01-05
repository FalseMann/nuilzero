import { ApiError } from "../response";

export class MethodNotAllowedError extends ApiError {
  constructor(message = "Method not allowed") {
    super(message);
    this.name = "MethodNotAllowedError";
  }

  statusCode = 405;
}
