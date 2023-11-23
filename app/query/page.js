import { createTodo } from '@/utils/createTodo';
import { createUpdate } from '@/utils/createUpdate';
import { createManyUsers, createUser, createUserWithTodo } from '@/utils/createUser';
import { queryData } from '@/utils/getQueryOutput';
import { updateManyUsers, updateUser, updateUserWithTodo } from '@/utils/updateUser';

// const page = async ({ searchParams }) => {
const page = async () => {
  // const query = await queryData(searchParams.q);
  // console.log(`searchParams : ${JSON.stringify(searchParams.q)}`);
  // console.log(JSON.stringify(query, null, 2));

  // const resultCreateUser = await createUser();
  // console.log(JSON.stringify(resultCreateUser, null, 2)); // resultCreateUser);

  // const resultCreateManyUsers = await createManyUsers();
  // console.log(resultCreateManyUsers);

  // const resultCreateUserWithTodo = await createUserWithTodo();
  // console.log(JSON.stringify(resultCreateUserWithTodo, null, 2));

  // const resultCreateTodo = await createTodo();
  // console.log(JSON.stringify(resultCreateTodo, null, 2)); // resultCreateTodo;

  // const resultUpdateUser = await updateUser();
  // console.log(JSON.stringify(resultUpdateUser, null, 2));

  // const resultUpdateManyUser = await updateManyUsers();
  // console.log(JSON.stringify(resultUpdateManyUser, null, 2));

  // const resultUpdateUserWithTodo = await updateUserWithTodo();
  // console.log(JSON.stringify(resultUpdateUserWithTodo, null, 2));

  const resultCreateUpdate = await createUpdate();
  console.log(JSON.stringify(resultCreateUpdate, null, 2));

  return <div> page </div>;
};

export default page;
