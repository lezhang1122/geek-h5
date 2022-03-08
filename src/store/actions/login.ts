import { RootThunkAction } from '@/types/store';
import { LoginForm, ApiResponse, Token } from '@/types/data';
import request from '@/utils/request';
import { setToken } from '@/utils/storage';

export const login =
  (values: LoginForm): RootThunkAction =>
    async dispatch => {
      const res = await request.post<ApiResponse<Token>>('/authorizations', values);
      setToken(res.data.data);
      dispatch({
        type: 'login/token',
        payload: res.data.data,
      });
    };

export const getCode = (mobile: string): RootThunkAction => {
    return async () => {
        await request.get(`/sms/codes/${mobile}`) // 验证码发送到手机上
    }
}