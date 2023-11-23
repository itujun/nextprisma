import prisma from './PrismaClient';

// Task 19 : $queryRaw
// Sebaiknya jangan digunakan, karena rentan terhadap serangan SQL misalnya seperti Sql Injection
export const queryData = async () => {
  try {
    const queryOutput = await prisma.$queryRaw`SELECT * FROM cobanextprisma.users`;
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};
