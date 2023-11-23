import { queryData } from '@/utils/getQueryOutput';

const page = async ({ searchParams }) => {
  const query = await queryData(searchParams.q);
  console.log(`searchParams : ${JSON.stringify(searchParams.q)}`);
  console.log(JSON.stringify(query, null, 2));
  return <div> page </div>;
};

export default page;
