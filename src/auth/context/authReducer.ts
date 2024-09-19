import { types } from '../types/types';

type State = {
    logged: boolean,
    user?: {
      id: string;
      name: string;
  }
}
type Action = {
  type: string;
  payload?: {
      id: string;
      name: string;
  };
}


export const authReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload
      };

    case types.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
