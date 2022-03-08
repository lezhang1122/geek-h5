import store from "@/store"
import {ThunkAction} from 'redux-thunk'

export type RootState = ReturnType<typeof store.getState>;

type LoginAction = {
    type: 'login',
    payload: 'data'
}
type RootAction = LoginAction;

export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>