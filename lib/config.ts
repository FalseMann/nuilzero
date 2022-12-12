import z from "zod";

export const APP_HOSTNAME =
  process.env.NEXT_PUBLIC_APP_HOSTNAME ?? process.env.VERCEL_URL ?? "localhost";

const ConfigSchema = z.object({
  redis: z.object({
    host: z.string(),
    port: z.coerce.number(),
    password: z.string(),
    tls: z.boolean(),
  }),
});

const config = ConfigSchema.parse({
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
    tls: process.env.REDIS_TLS !== "false",
  },
});

export default config;
