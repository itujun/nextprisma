import prisma from './PrismaClient';

// Task 9 : findMany() + where + and
export const queryData = async () => {
  try {
    const queryOutput = await prisma.users.findMany({
      select: {
        firstName: true,
        lastName: true,
        validated: true,
      },
      where: {
        AND: [
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
