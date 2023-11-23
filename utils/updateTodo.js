import prisma from './PrismaClient';

export const updateTodoFromUser = async () => {
  try {
    const result = await prisma.todo.updateMany({
      where: {
        user: {
          validated: true,
          idUser: 1,
        },
      },
      data: {
        completed: true,
      },
    });
    return result;
  } catch (error) {
    return error;
  }
};
