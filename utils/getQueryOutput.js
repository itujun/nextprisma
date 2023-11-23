import prisma from './PrismaClient';

// Task 10 : findMany() + where + or
export const queryData = async () => {
  try {
    const queryOutput = await prisma.users.findMany({
      select: {
        firstName: true,
        lastName: true,
        validated: true,
      },
      where: {
        OR: [
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
