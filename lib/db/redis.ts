import Redis, { RedisOptions } from "ioredis";
import config from "../config/server";

const redisConfig: RedisOptions = {
  host: config.redis.host,
  port: config.redis.port,
  password: config.redis.password,
};

if (config.redis.tls) {
  redisConfig.tls = {};
}

export const redis = new Redis(redisConfig);
