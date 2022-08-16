import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import PokemonDetails from '../pages/PokemonDetails';
import pokemons from '../data';
import { updateFavoritePokemons } from '../services/pokedexService';
import favPokemons from './helpers/favPokemonsObj';

describe('Testes do componente \'PokemonDetails\'', () => {
  it('verifica se ao renderizar o \'PokemonDetails\' pokemonInfo aparece na tela', () => {
    renderWithRouter(<PokemonDetails
      match={ { params: { id: '25' } } }
      isPokemonFavoriteById={ favPokemons }
      onUpdateFavoritePokemons={ updateFavoritePokemons }
      pokemons={ pokemons }
    />);

    const pokemonName = screen.getByRole('heading', {
      name: 'Pikachu Details', level: 2 });
    const pokemonSummary = screen.getByRole('heading', {
      name: 'Summary', level: 2 });
    const summaryText = screen.getByText(/Pokémon roasts hard berr/i, { selector: 'p' });
    const pokemonLocations = screen.getByRole('heading', {
      name: 'Game Locations of Pikachu', level: 2 });
    const pokemonImgs = screen.getAllByAltText('Pikachu location');

    expect(pokemonName).toBeInTheDocument();
    expect(pokemonSummary).toBeInTheDocument();
    expect(summaryText).toBeInTheDocument();
    expect(pokemonLocations).toBeInTheDocument();
    expect(pokemonImgs[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(pokemonImgs[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  it('verifica se ao renderizar o \'PokemonDetails\' o checkbox aparece na tela', () => {
    renderWithRouter(<PokemonDetails
      match={ { params: { id: '25' } } }
      isPokemonFavoriteById={ favPokemons }
      onUpdateFavoritePokemons={ updateFavoritePokemons }
      pokemons={ pokemons }
    />);

    const checkboxFav = screen.getByLabelText('Pokémon favoritado?');
    expect(checkboxFav).toBeInTheDocument();
  });
});
