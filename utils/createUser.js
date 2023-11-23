import prisma from './PrismaClient';

export const createUser = async () => {
  try {
    const result = await prisma.users.create({
      data: {
        firstName: 'User',
        lastName: 'Test 2',
        validated: false,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
