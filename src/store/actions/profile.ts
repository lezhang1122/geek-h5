import { ApiResponse, User } from '@/types/data';
import { RootThunkAction } from '@/types/store';
import request from '@/utils/request';

export const getUser = (): RootThunkAction => async dispatch => {
  const res = await request.get<ApiResponse<User>>('/user');
  dispatch({
    type: 'profile/userInfo',
    payload: res.data.data,
  });
};
