import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('Testes do componente \'FavoritePokemons\'', () => {
  it('verifica se ao renderizar o \'About\' o titulo esta na tela', () => {
    renderWithRouter(<FavoritePokemons />);

    const favoriteTitle = screen.getByRole('heading', {
      name: 'Favorite pokémons', level: 2 });
    expect(favoriteTitle).toBeInTheDocument();
  });

  it('verifica se ao renderizar o \'FavoritePokemons\' aparece mssg: esta vazio', () => {
    renderWithRouter(<FavoritePokemons />);

    const message = screen.getByText(/No favorite pokemon found/i);
    expect(message).toBeInTheDocument();
  });
});
