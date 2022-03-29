import { ApiResponse, User, UserProfile } from '@/types/data';
import { RootThunkAction } from '@/types/store';
import request from '@/utils/request';

export const getUser = (): RootThunkAction => async dispatch => {
  const res = await request.get<ApiResponse<User>>('/user');
  dispatch({
    type: 'profile/userInfo',
    payload: res.data.data,
  });
};

export const getUserProfile = (): RootThunkAction => async dispatch => {
  const res = await request.get<ApiResponse<UserProfile>>('/user/profile');
  dispatch({ type: 'profile/getUserProfile', payload: res.data.data });
};

export const updateUserProfile =
  (key: string, value: string): RootThunkAction =>
    async dispatch => {
      await request.patch('/user/profile', {
        [key]: value,
      });
      dispatch(getUserProfile());
    };
