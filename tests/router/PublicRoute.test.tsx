import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { AuthContext } from '../../src/auth';
import { PublicRoute } from '../../src/router/PublicRoute';

describe('Tests in <PublicRoute />', () => {
  test('should show children if not authenticated', () => {
    const contextValue = {
      logged: false,
      login: () => {},
      logout: () => {},
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta pública</h1>
        </PublicRoute>
      </AuthContext.Provider>,
    );

    expect(screen.getByText('Ruta pública')).toBeTruthy();
  });

  test('should browse if you are authenticated', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'Strider',
        id: 'ABC123',
      },
      login: () => {},
      logout: () => {},
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Ruta pública</h1>
                </PublicRoute>
              }
            />
            <Route path="marvel" element={<h1>Página Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    expect(screen.getByText('Página Marvel')).toBeTruthy();
  });
});
