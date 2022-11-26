/*
 * @Author: lengkj
 * @Date: 2022-11-25 16:32:58
 * @LastEditTime: 2022-11-25 16:49:04
 * @LastEditors: Please set LastEditors
 * @Description: demo页面 接口
 * @FilePath: /base-template/src/services/demo/index.ts
 */
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import type { IGetPwdStrategyData } from './types';

export const useGetPwdStrategyQuery = () => {
  return useQuery(['/bf/login/pwd_strategy'], async (): Promise<IGetPwdStrategyData> => {
    const { data } = await axios.get('/bf/login/pwd_strategy');

    return data;
  });
};
