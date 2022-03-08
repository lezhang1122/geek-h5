import { RootThunkAction } from "@/types/store";

export const login = (): RootThunkAction => async dispatch => ({
  type: 'login',
  payload: 'data',
});
