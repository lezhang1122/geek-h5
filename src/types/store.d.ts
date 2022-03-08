import store from '@/store';
import { ThunkAction } from 'redux-thunk';
import { Token } from './data';

// store
export type RootState = ReturnType<typeof store.getState>;
type RootAction = LoginAction;
export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>;

// 登陆的action
type LoginAction = {
  type: 'login/token';
  payload: Token;
};
