// seed user
import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb(process.env["DATABASE_URL"] as string);
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: "Alice",
        email: "alice@example.com"
      },
      {
        name: "Bob",
        email: "bob@example.com"
      },
      {
        name: "Charlie",
        email: "charlie@example.com"
      },
      {
        name: "David",
        email: "david@example.com"
      }
    ]
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
