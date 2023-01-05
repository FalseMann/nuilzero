import type { NextApiResponse } from "next";

export interface ErrorResponse {
  error: {
    name: string;
    message: string;
  };
}

export abstract class ApiError extends Error {
  abstract statusCode: number;
}

export function sendResponse(
  res: NextApiResponse,
  data: any = { success: true }
) {
  res.status(200).send(data);
}

export function sendError(
  res: NextApiResponse,
  { name, message, statusCode }: ApiError
) {
  res.status(statusCode).send({ error: { name, message } });
}
