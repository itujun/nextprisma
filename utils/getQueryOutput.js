import prisma from './PrismaClient';

// Task 18 : skip + take + findMany()
export const queryData = async () => {
  try {
    const queryOutput = await prisma.users.findMany({
      skip: 0,
      take: 2,
    });
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};
