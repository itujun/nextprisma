const { default: prisma } = require('./PrismaClient');

// export const createUpdate = async () => {
//   try {
//     const result = await prisma.users.upsert({
//       where: {
//         idUser: 3,
//       },
//       update: {
//         validated: true,
//       },
//       create: {
//         firstName: 'Upsert',
//         lastName: 'Result',
//         validated: false,
//       },
//     });
//     return result;
//   } catch (error) {
//     return error;
//   }
// };

export const createUpdate = async () => {
  try {
    const result = await prisma.users.upsert({
      where: {
        idUser: 14,
      },
      update: {
        validated: true,
      },
      create: {
        firstName: 'Upsert',
        lastName: 'Result 2',
        validated: false,
        todo: {
          create: {
            todoText: 'Upsert Todo',
            completed: false,
          },
        },
      },
      include: {
        todo: true,
      },
    });
    return result;
  } catch (error) {
    return error;
  }
};
