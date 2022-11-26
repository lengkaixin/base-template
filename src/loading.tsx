/*
 * @Author: lengkj
 * @Date: 2022-11-25 16:51:15
 * @LastEditTime: 2022-11-25 17:11:04
 * @LastEditors: Please set LastEditors
 * @Description: dynamicImport loading
 * @FilePath: /base-template/src/loading.tsx
 */

import { Skeleton } from 'antd';

const Loading = () => {
  return (
    <>
      <Skeleton
        active
        // style={{ padding: '20px' }}
      />
    </>
  );
};

export default Loading;
