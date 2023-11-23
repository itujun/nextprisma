import prisma from './PrismaClient';

// Create Todo
export const createTodo = async () => {
  const dataTodo = {
    todoText: 'Todo terbaru lagi',
    completed: true,
    userId: 8,
  };
  try {
    const result = prisma.todo.create({
      data: dataTodo,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
