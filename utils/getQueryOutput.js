import prisma from './PrismaClient';

// Task 7 : findMany() + include + nested include
export const queryData = async () => {
  try {
    const queryOutput = await prisma.users.findMany({
      include: {
        todo: {
          include: {
            tag: true,
          },
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
