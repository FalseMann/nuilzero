import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/db/postgres";

console.log("DATABASE_URL", process.env.DATABASE_URL);
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
}
