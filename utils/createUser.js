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

// Create Multiple users
export const createManyUsers = async () => {
  const dataUsers = [
    {
      firstName: 'Many',
      lastName: '1',
      validated: true,
    },
    {
      firstName: 'Many',
      lastName: '2',
      validated: false,
    },
  ];

  try {
    const result = await prisma.users.createMany({
      data: dataUsers,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
