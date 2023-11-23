import prisma from './PrismaClient';

export const updateUser = async () => {
  try {
    const result = await prisma.users.update({
      where: {
        idUser: 3,
      },
      data: {
        lastName: 'Aja',
      },
    });
    return result;
  } catch (error) {
    return error;
  }
};
