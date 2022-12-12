import type { NextApiRequest, NextApiResponse } from "next";
import { redis } from "../../lib/db/redis";

type Data = {
  value: string;
};

const KEY = "TestKey";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const writeParam = req.query.write;
  if (writeParam) {
    const value = Array.isArray(writeParam) ? writeParam.join(",") : writeParam;
    await redis.set(KEY, value);
  }

  const value = await redis.get(KEY);

  if (value === null)
    throw new Error(
      `Key "${KEY}" not found. Retry the request with a query param like "?write=somevalue"`
    );

  res.status(200).json({ value });
}
