import prisma from './PrismaClient';

// Task 17 : orderBy + findMany()
export const queryData = async () => {
  try {
    const queryOutput = await prisma.users.findMany({
      where: {
        firstName: {
          startsWith: 'J',
        },
      },
      orderBy: [
        {
          lastName: 'asc',
        },
        {
          createdAt: 'desc',
        },
      ],
    });
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};
