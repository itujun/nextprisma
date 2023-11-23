import prisma from './PrismaClient';

// Task 13 : findUnique()
export const queryData = async () => {
  try {
    const queryOutput = await prisma.users.findUnique({
      where: {
        idUser: 2,
      },
    });
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};
