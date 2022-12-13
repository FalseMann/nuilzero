import { PrismaClient } from "@prisma/client";
import config from "../config/server";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

let databaseUrl = config.postgres.url;

if (config.env.vercel === "preview") {
  databaseUrl = `${databaseUrl}?schema=${convertBranchToSchemaName(
    config.env.branch
  )}`;
}

function convertBranchToSchemaName(branch: string) {
  return branch.replace(/\//g, "__");
}

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    datasources: {
      db: {
        url: databaseUrl,
      },
    },
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
