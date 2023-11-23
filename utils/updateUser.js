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

export const updateManyUsers = async () => {
  try {
    const result = await prisma.users.updateMany({
      where: {
        firstName: {
          contains: 'W',
        },
      },
      data: {
        lastName: 'Changed',
      },
    });
    return result;
  } catch (error) {
    return error;
  }
};
