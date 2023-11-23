import prisma from './PrismaClient';

// Task 8 : findMany() + include + nested include + where + startsWith
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
      where: {
        firstName: {
          startsWith: 'M',
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
