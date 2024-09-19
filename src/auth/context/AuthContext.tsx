import { createContext } from 'react';

type IAuthContext = {
  logged: boolean;
  user?: {
    id: string;
    name: string;
  };
  login: (name: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<IAuthContext>({
  logged: false,
  login: () => {},
  logout: () => {},
});
