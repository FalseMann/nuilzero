import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const donkey = await prisma.user.upsert({
    where: { email: "donkey@kong.com" },
    update: {},
    create: {
      email: "donkey@kong.com",
    },
  });
  const diddy = await prisma.user.upsert({
    where: { email: "diddy@kong.com" },
    update: {},
    create: {
      email: "diddy@kong.com",
    },
  });
  console.log({ donkey, diddy });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
