import prisma from './PrismaClient';

// Task 6 : findMany() + include
export const queryData = async () => {
  try {
    const queryOutput = await prisma.users.findMany({
      include: {
        todo: true,
      },
    });
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};
