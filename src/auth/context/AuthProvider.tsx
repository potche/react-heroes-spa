import React, { useReducer } from 'react';

import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';

const init = () => {
  const localUser = localStorage.getItem('user');
  const user = localUser ? JSON.parse(localUser) : '';

  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (name: string) => {
    const user = {
      id: 'ABC',
      name,
    };
    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem('user');
    const action = {
      type: types.logout,
    };
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
