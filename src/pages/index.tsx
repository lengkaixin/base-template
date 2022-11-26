import yayJpg from '../assets/yay.jpg';
// import { useSelector } from 'umi';
import { Button } from 'antd';

import { demo } from '@/services';
const { useGetPwdStrategyQuery } = demo;

export default function HomePage() {
  const {
    // data,
    isLoading,
  } = useGetPwdStrategyQuery();
  // const countStore = useSelector((state) => state.count);

  // console.log(countStore, 'countStore');

  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width='388' />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <Button loading={isLoading}>click</Button>

      <div className='bg-red p-20'>test tailwindCSS</div>
    </div>
  );
}
