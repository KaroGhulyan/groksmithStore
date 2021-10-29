import { ProductState, UserState } from './../interfaces';
import { UserAction, UserActionType } from '../actions/types';

const initialState: UserState = {
  token: '',
  user: {},
  error: null,
}

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionType.isLoggedIn:
      return {
        token: action.payload,
        user: {},
        error: null,
      }
  }
  return state;
}

export default userReducer