import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import Pokemon from '../components/Pokemon';
import pokemons from '../data';

describe('Testes do componente \'Pokemon\'', () => {
  it('verifica se ao renderizar o \'Pokemon\' o nome do pokemon aparece na tela', () => {
    renderWithRouter(<Pokemon pokemon={ pokemons[0] } isFavorite />);

    const pokemonName = screen.getByText('Pikachu');
    expect(pokemonName).toBeInTheDocument();
  });

  it('verifica se ao renderizar o \'Pokemon\' o tipo do pokemon aparece na tela', () => {
    renderWithRouter(<Pokemon pokemon={ pokemons[0] } isFavorite />);

    const pokemonType = screen.getByText('Electric');
    expect(pokemonType).toBeInTheDocument();
  });

  it('verifica se ao renderizar o \'Pokemon\' o peso do pokemon aparece na tela', () => {
    renderWithRouter(<Pokemon pokemon={ pokemons[0] } isFavorite />);

    const pokemonType = screen.getByText('Average weight: 6.0 kg');
    expect(pokemonType).toBeInTheDocument();
  });

  it('verifica se ao renderizar o \'Pokemon\' o peso do pokemon aparece na tela', () => {
    renderWithRouter(<Pokemon pokemon={ pokemons[0] } isFavorite />);

    const pokemonImg = screen.getByAltText('Pikachu sprite');
    expect(pokemonImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  it('verifica se ao clicar em mais detalhes leva para a pagina correta', () => {
    const { history } = renderWithRouter(<Pokemon pokemon={ pokemons[0] } isFavorite />);

    const moreDetailsLink = screen.getByRole('link', { name: /More details/i });
    expect(moreDetailsLink).toBeInTheDocument();

    userEvent.click(moreDetailsLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  it('verifica se ao renderizar o \'Pokemon\' existe uma imagem de favorito', () => {
    renderWithRouter(<Pokemon pokemon={ pokemons[0] } isFavorite />);

    const favoriteImg = screen.getByAltText('Pikachu is marked as favorite');
    expect(favoriteImg).toHaveAttribute('src', '/star-icon.svg');
  });
});
