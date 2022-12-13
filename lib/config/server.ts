import z from "zod";

const ConfigSchema = z.object({
  env: z.object({
    branch: z.string(),
    vercel: z
      .enum(["local", "development", "preview", "production"])
      .default("local"),
  }),
  postgres: z.object({
    url: z.string(),
  }),
  redis: z.object({
    host: z.string(),
    port: z.coerce.number(),
    password: z.string(),
    tls: z.boolean(),
  }),
});

const config = ConfigSchema.parse({
  env: {
    branch: process.env.VERCEL_GIT_COMMIT_REF,
    vercel: process.env.VERCEL_ENV,
  },
  postgres: {
    url: process.env.DATABASE_URL,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
    tls: process.env.REDIS_TLS === "true",
  },
});

export default config;
