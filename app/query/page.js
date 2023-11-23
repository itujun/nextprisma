import { createManyUsers, createUser } from '@/utils/createUser';
import { queryData } from '@/utils/getQueryOutput';

// const page = async ({ searchParams }) => {
const page = async () => {
  // const query = await queryData(searchParams.q);
  // console.log(`searchParams : ${JSON.stringify(searchParams.q)}`);
  // console.log(JSON.stringify(query, null, 2));

  // const resultCreateUser = await createUser();
  // console.log(JSON.stringify(resultCreateUser, null, 2)); // resultCreateUser);

  const resultCreateManyUsers = await createManyUsers();
  console.log(resultCreateManyUsers);

  return <div> page </div>;
};

export default page;
