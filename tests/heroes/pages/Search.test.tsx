import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Search } from '@/heroes';

describe('Pruebas en <Search />', () => {
  beforeEach(() => vi.clearAllMocks());

  test('debe de mostrarse correctamente con valores por defecto', () => {
    const { container } = render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar a Batman y el input con el valor del queryString', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Search />
      </MemoryRouter>,
    );
    screen.debug();
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('batman');

    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img.src).toContain('/assets/heroes/dc-batman.jpg');

    const alert = screen.getByLabelText('alert-danger') as HTMLLabelElement;
    expect(alert.style.display).toBe('none');
  });

  test('debe de mostrar un error si no se encuentra el hero (batman123)', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <Search />
      </MemoryRouter>,
    );

    const alert = screen.getByLabelText('alert-danger');
    expect(alert.style.display).toBe('');
  });

  test('debe de llamar el navigate a la pantalla nueva', () => {
    const inputValue = 'superman';

    render(
      <MemoryRouter initialEntries={['/search']}>
        <Search />
      </MemoryRouter>,
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, {
      target: { name: 'searchText', value: inputValue },
    });

    const form = screen.getByRole('form') as HTMLFormElement;
    fireEvent.submit(form);
  });
});
