import store from '@/store';
import { ThunkAction } from 'redux-thunk';
import { Token, User } from './data';

// store
export type RootState = ReturnType<typeof store.getState>;
type RootAction = LoginAction | ProfileAction;
export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>;

// 登陆的action
type LoginAction = {
  type: 'login/token';
  payload: Token;
};

type ProfileAction = {
  type: 'profile/userInfo';
  payload: User;
};
