import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  ///. write prisma client queries here
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
