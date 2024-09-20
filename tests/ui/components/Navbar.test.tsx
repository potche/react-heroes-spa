import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/ui/components/Navbar';

const mockedUseNavigate = vi.fn();

vi.mock('react-router-dom', async () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(await vi.importActual<any>('react-router-dom')),
  useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <Navbar />', () => {
  const contextValue = {
    logged: true,
    user: {
      id: '123',
      name: 'Hola mundo',
    },
    logout: vi.fn(),
    login: vi.fn(),
  };

  beforeEach(() => vi.clearAllMocks());

  test('debe de mostrar el nombre del usuario', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    expect(screen.getByText('Hola mundo')).toBeTruthy();
  });

  test('debe de llamar el logout y navigate cuando se hace click en el botón', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    const logoutBtn = screen.getByRole('button');
    fireEvent.click(logoutBtn);

    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
  });
});
