// seed user
import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb(process.env["DATABASE_URL"] as string);
const prisma = new PrismaClient({
  adapter,
  log: [
    {
      emit: "stdout",
      level: "query",
    },
  ]
});

async function main() {
  // await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "Alice",
  //       email: "alice@example.com"
  //     },
  //     {
  //       name: "Bob",
  //       email: "bob@example.com"
  //     },
  //     {
  //       name: "Charlie",
  //       email: "charlie@example.com"
  //     },
  //     {
  //       name: "David",
  //       email: "david@example.com"
  //     }
  //   ]
  // });

  // test crud api

  // const uniqueUser = await prisma.user.findUnique({
  //   where: {
  //     // email: "alice@example.com"
  //     id: 1,
  //   }
  // });
  // console.log(uniqueUser);

  // const firstUser = await prisma.user.findFirst({
  //   where: {
  //     name: "Alice"
  //   },
  //   select: {
  //     id: true,
  //     name: true,
  //   }
  // });
  // console.log(firstUser);

  // findUniqueOrThrow
  // const uniqueUserOrThrow = await prisma.user.findUniqueOrThrow({
  //   where: {
  //     email: "alice1@example.com"
  //   }
  // });
  // console.log(uniqueUserOrThrow);


  // const users = await prisma.user.findMany({
  //   where: {
  //     name: {
  //       contains: "a",
  //     }
  //   },
  //   orderBy: {
  //     id: "desc"
  //   },
  //   skip: 2,
  //   take: 2,
  // });
  // console.log(users);

  // const user = await prisma.user.create({
  //   data: {
  //     name: "Eve",
  //     email: "eve@example.com"
  //   }
  // });
  // console.log(user);

  // const updatedUser = await prisma.user.update({
  //   where: {
  //     id: 9
  //   },
  //   data: {
  //     name: "Eve Updated"
  //   }
  // });
  // console.log(updatedUser);

  // const deletedUser = await prisma.user.delete({
  //   where: {
  //     id: 9
  //   }
  // });
  // console.log(deletedUser);


  // const count = await prisma.user.count();
  // console.log(count);

  // const aggregate = await prisma.user.aggregate({
  //   _count: true,
  //   _avg: {
  //     id: true
  //   },
  //   _sum: {
  //     id: true
  //   },
  //   _min: {
  //     id: true
  //   },
  //   _max: {
  //     id: true
  //   }
  // });
  // console.log(aggregate);

  // const groupBy = await prisma.user.groupBy({
  //   by: ["name"],
  //   _count: {
  //     _all: true
  //   }
  // });
  // console.log(groupBy);

  // upsert
  // const upsertedUser = await prisma.user.upsert({
  //   where: {
  //     email: "eve@example.com"
  //   },
  //   update: {
  //     name: "Eve Updated Again"
  //   },
  //   create: {
  //     name: "Eve",
  //     email: "eve@example.com"
  //   }
  // });
  // console.log(upsertedUser);

  // updateMany
  // const updateMany = await prisma.user.updateMany({
  //   where: {
  //     name: "Alice"
  //   },
  //   data: {
  //     name: "Alice Updated"
  //   }
  // });
  // console.log(updateMany);

  // deleteMany
  const deleteMany = await prisma.user.deleteMany({
    where: {
      name: "Bob"
    }
  });
  console.log(deleteMany);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
