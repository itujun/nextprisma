import prisma from './PrismaClient';

// Task 4 : findMany() + Select + Where
export const queryData = async () => {
  try {
    const queryOutput = await prisma.users.findMany({
      select: {
        firstName: true,
        lastName: true,
      },
      where: {
        firstName: 'Juna',
      },
    });
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};
