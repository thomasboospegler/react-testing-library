import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';
import pokemons from '../data';

describe('Testes do componente \'FavoritePokemons\'', () => {
  it('verifica se ao renderizar o \'FavoritePokemons\' o titulo esta na tela', () => {
    renderWithRouter(<FavoritePokemons pokemons={ pokemons } />);

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
