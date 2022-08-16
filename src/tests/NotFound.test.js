import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Testes do componente \'NotFound\'', () => {
  it('verifica se ao renderizar o \'NotFound\' o titulo esta na tela', () => {
    renderWithRouter(<NotFound />);

    const messageNotFound = screen.getByRole('heading', {
      name: /Page requested not found/i, level: 2 });
    expect(messageNotFound).toBeInTheDocument();
  });

  it('verifica se ao renderizar o \'NotFound\' a imagem esta na tela', () => {
    renderWithRouter(<NotFound />);

    const image = screen
      .getByAltText('Pikachu crying because the page requested was not found');
    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
