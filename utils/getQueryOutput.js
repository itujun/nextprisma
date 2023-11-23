import prisma from './PrismaClient';

// Task 14 : groupBy() + _count
export const queryData = async () => {
  try {
    const queryOutput = await prisma.users.groupBy({
      by: ['validated'],
      _count: true,
    });
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};
