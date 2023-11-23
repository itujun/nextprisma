import prisma from './PrismaClient';

// Create Single user
// export const createUser = async () => {
//   try {
//     const result = await prisma.users.create({
//       data: {
//         firstName: 'User',
//         lastName: 'Test 2',
//         validated: false,
//       },
//     });
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Create Multiple users
// export const createManyUsers = async () => {
//   const dataUsers = [
//     {
//       firstName: 'Many',
//       lastName: '1',
//       validated: true,
//     },
//     {
//       firstName: 'Many',
//       lastName: '2',
//       validated: false,
//     },
//   ];

//   try {
//     const result = await prisma.users.createMany({
//       data: dataUsers,
//     });
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// };

// Create users with todo (child of table users)
export const createUserWithTodo = async () => {
  const dataUserWithTodo = {
    firstName: 'User W',
    lastName: 'Todo 2',
    validated: false,
    todo: {
      create: {
        todoText: 'Simple Todo 2',
        completed: true,
      },
    },
  };
  try {
    const result = await prisma.users.create({
      data: dataUserWithTodo,
      include: {
        todo: true,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
