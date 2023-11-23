import prisma from './PrismaClient';

// Task 12 : findMany() + distinct()
export const queryData = async () => {
  try {
    const queryOutput = await prisma.users.findMany({
      select: {
        validated: true,
      },
      distinct: ['validated'],
    });
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};
