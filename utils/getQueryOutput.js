import prisma from './PrismaClient';

// Task 16 : aggregate()
export const queryData = async () => {
  try {
    const queryOutput = await prisma.users.aggregate({
      _min: {
        createdAt: true,
      },
      _max: {
        createdAt: true,
      },
      _count: {
        createdAt: true,
      },
    });
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};
