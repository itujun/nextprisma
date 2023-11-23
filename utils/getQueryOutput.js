import prisma from './PrismaClient';

// Task 11 : findMany() + where + not
export const queryData = async () => {
  try {
    const queryOutput = await prisma.users.findMany({
      select: {
        firstName: true,
        lastName: true,
        validated: true,
      },
      where: {
        NOT: [
          {
            firstName: {
              startsWith: 'J',
            },
            validated: true,
          },
        ],
      },
    });
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};
