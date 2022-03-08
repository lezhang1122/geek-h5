import { User } from '@/types/data';
import { ProfileAction } from '@/types/store';
type ProfileState = {
  userInfo: User;
};
const initState = {
  userInfo: {},
} as ProfileState;

export default (state = initState, action: ProfileAction): ProfileState => {
  switch (action.type) {
    case 'profile/userInfo':
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};
