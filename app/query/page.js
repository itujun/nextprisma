import { queryData } from '@/utils/getQueryOutput';

const page = async () => {
  const query = await queryData();
  console.log(JSON.stringify(query, null, 2));
  return <div> page </div>;
};

export default page;
