import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const example = await prisma.api.create({
    data: {
      endpoint: "example",
      value: {
        name: "test",
        description: "This is example value"
      },
      settings: {
        id: "autoIncrement"
      }
    }
  });
  console.log(`Seeding completed.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
