import z from "zod";

const ConfigSchema = z.object({
  env: z.object({
    hostname: z.string(),
  }),
});

const config = ConfigSchema.parse({
  env: {
    hostname: new URL(process.env.APP_ORIGIN ?? "http://localhost:3000")
      .hostname,
  },
});

export default config;
