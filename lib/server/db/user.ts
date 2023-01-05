import { prisma } from "./clients/postgres";

/**
 * Find a user by their Twitch ID
 */
export function findUserById(id: string) {
  return prisma.user.findFirstOrThrow({
    where: { id },
  });
}
