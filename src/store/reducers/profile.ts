import { User, UserProfile } from '@/types/data';
import { ProfileAction } from '@/types/store';
type ProfileState = {
  userInfo: User;
  userProfile: UserProfile;
};
const initState = {
  userInfo: {},
  userProfile: {},
} as ProfileState;

export default (state = initState, action: ProfileAction): ProfileState => {
  switch (action.type) {
    case 'profile/userInfo':
      return {
        ...state,
        userInfo: action.payload,
      };
    case 'profile/getUserProfile':
      return {
        ...state,
        userProfile: action.payload
      }
    default:
      return state;
  }
};
