// File biasa untuk berinteraksi dengan database
// Task 1
// export const queryData = async() => {
//     const queryOutput = 'Hello World!';
//     return queryOutput;
// };

import prisma from './PrismaClient';

// Task 2 : findMany()
// export const queryData = async () => {
//   try {
//     const queryOutput = await prisma.users.findMany();
//     return queryOutput;
//   } catch (error) {
//     console.log(error);
//   } finally {
//     prisma.$disconnect();
//   }
// };

// Task 3 : findMany() + Select
export const queryData = async () => {
  try {
    const queryOutput = await prisma.users.findMany({
      select: {
        firstName: true,
        lastName: true,
      },
    });
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};
