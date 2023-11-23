import prisma from './PrismaClient';

// Task 15 : count()
export const queryData = async () => {
  try {
    const queryOutput = await prisma.users.count({
      where: {
        validated: false,
      },
    });
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};
