import { Token } from '@/types/data';
import { LoginAction } from '@/types/store';
import { getToken } from '@/utils/storage';

const initialState: Token = getToken();

const login = (state: Token = initialState, action: LoginAction) => {
  switch (action.type) {
    case 'login/token':
      return action.payload;
    default:
      return state;
  }
};

export default login;
