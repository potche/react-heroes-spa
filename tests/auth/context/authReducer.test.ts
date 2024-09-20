import { describe, expect, test } from 'vitest';

import { authReducer, types } from '@/auth';

describe('Pruebas en authReducer', () => {
  test('should return the default state', () => {
    const state = authReducer({ logged: false }, { type: '' });
    expect(state).toEqual({ logged: false });
  });

  test('should must call the login, authentication and establish the user', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'hola',
        id: '123',
      },
    };
    const state = authReducer({ logged: false }, action);

    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test('should delete the username and logged to false', () => {
    const state = {
      logged: true,
      user: { id: '123', name: 'Juan' },
    };

    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({
      logged: false,
    });
  });
});
