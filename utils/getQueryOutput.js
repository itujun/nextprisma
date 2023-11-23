import prisma from './PrismaClient';

// Task 20 : searchParams
export const queryData = async (parameter) => {
  let query = parameter;
  //   let query = 'Juna';
  try {
    const queryOutput = await prisma.users.findMany({
      where: {
        firstName: query,
      },
    });
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};
