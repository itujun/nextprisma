import prisma from './PrismaClient';

// Task 5 : findMany() + Select + Where (spesific)
export const queryData = async () => {
  try {
    const queryOutput = await prisma.users.findMany({
      select: {
        firstName: true,
        lastName: true,
      },
      where: {
        firstName: {
          startsWith: 'J',
        },
      },
    });
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};
