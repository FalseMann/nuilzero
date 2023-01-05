import z from "zod";

const ConfigSchema = z.object({
  auth: z.object({
    refreshToken: z.object({
      secret: z.string(),
    }),
    sessionToken: z.object({
      secret: z.string(),
    }),
  }),
  env: z.object({
    branch: z.string(),
    origin: z.string(),
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
  twitch: z.object({
    clientId: z.string(),
    clientSecret: z.string(),
  }),
});

const config = ConfigSchema.parse({
  auth: {
    refreshToken: {
      secret: process.env.REFRESH_TOKEN_SECRET,
    },
    sessionToken: {
      secret: process.env.SESSION_TOKEN_SECRET,
    },
  },
  env: {
    branch: process.env.VERCEL_GIT_COMMIT_REF,
    origin: process.env.APP_ORIGIN,
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
  twitch: {
    clientId: process.env.TWITCH_CLIENT_ID,
    clientSecret: process.env.TWITCH_CLIENT_SECRET,
  },
});

export default config;
