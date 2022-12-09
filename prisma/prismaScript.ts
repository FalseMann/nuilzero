import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  ///. write prisma client queries here
  const user = await prisma.user.create({
    data: {
      email: "test@nuilzero.com",
      name: "Nuilzero",
      // posts: [],
      // profile: "Nuilzero's Test",
    },
  });
  console.log("user", user);
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
