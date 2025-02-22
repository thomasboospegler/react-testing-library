import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import Pokedex from '../pages/Pokedex';
import pokemons from '../data';
import favPokemons from './helpers/favPokemonsObj';

describe('Testes do componente \'Pokedex\'', () => {
  it('verifica se ao renderizar o \'Pokedex\' o titulo esta na tela', () => {
    renderWithRouter(<Pokedex
      pokemons={ pokemons }
      isPokemonFavoriteById={ favPokemons }
    />);

    const pokedexTitle = screen.getByRole('heading', {
      name: 'Encountered pokémons', level: 2 });
    expect(pokedexTitle).toBeInTheDocument();
  });

  it('verifica se ao renderizar o \'Pokedex\' o primeiro pokemon esta na tela', () => {
    renderWithRouter(<Pokedex
      pokemons={ pokemons }
      isPokemonFavoriteById={ favPokemons }
    />);

    const firstPokemonImg = screen.getByAltText('Pikachu sprite');
    expect(firstPokemonImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  it('verifica se ao renderizar o \'Pokedex\' os botões existem', () => {
    renderWithRouter(<Pokedex
      pokemons={ pokemons }
      isPokemonFavoriteById={ favPokemons }
    />);

    const nextButton = screen.getByRole('button', {
      name: 'Próximo pokémon' });
    const allButton = screen.getByRole('button', {
      name: 'All' });
    const eletricButton = screen.getByRole('button', {
      name: 'Electric' });
    const fireButton = screen.getByRole('button', {
      name: 'Fire' });
    const bugButton = screen.getByRole('button', {
      name: 'Bug' });
    const poisonButton = screen.getByRole('button', {
      name: 'Poison' });
    const psychicButton = screen.getByRole('button', {
      name: 'Psychic' });
    const normalButton = screen.getByRole('button', {
      name: 'Normal' });
    const dragonButton = screen.getByRole('button', {
      name: 'Dragon' });
    const typeButtons = screen.getAllByTestId('pokemon-type-button');
    const TYPE_BUTTONS_AMOUNT = 7;

    expect(nextButton).toBeInTheDocument();
    expect(allButton).toBeInTheDocument();
    expect(eletricButton).toBeInTheDocument();
    expect(fireButton).toBeInTheDocument();
    expect(bugButton).toBeInTheDocument();
    expect(poisonButton).toBeInTheDocument();
    expect(psychicButton).toBeInTheDocument();
    expect(normalButton).toBeInTheDocument();
    expect(dragonButton).toBeInTheDocument();
    expect(typeButtons).toHaveLength(TYPE_BUTTONS_AMOUNT);
  });

  it('verifica se ao renderizar o \'Pokedex\' é possivel clicar no botão \'All\'', () => {
    renderWithRouter(<Pokedex
      pokemons={ pokemons }
      isPokemonFavoriteById={ favPokemons }
    />);

    const allButton = screen.getByRole('button', {
      name: 'All' });
    userEvent.click(allButton);
    expect(allButton).toBeInTheDocument();
  });

  it('verifica se ao clicar no botão \'Proximo Pokemom\' apareco o proximo', () => {
    renderWithRouter(<Pokedex
      pokemons={ pokemons }
      isPokemonFavoriteById={ favPokemons }
    />);

    const firstPokemonImg = screen.getByAltText('Pikachu sprite');
    expect(firstPokemonImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');

    const nextButton = screen.getByRole('button', {
      name: 'Próximo pokémon' });
    expect(nextButton).toBeInTheDocument();
    userEvent.click(nextButton);

    const secondPokemonImg = screen.getByAltText('Charmander sprite');
    expect(secondPokemonImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png');
  });

  it('verifica se ao clicar no botão \'Bug\' apareco o pokemon correto', () => {
    renderWithRouter(<Pokedex
      pokemons={ pokemons }
      isPokemonFavoriteById={ favPokemons }
    />);

    const bugButton = screen.getByRole('button', {
      name: 'Bug' });
    expect(bugButton).toBeInTheDocument();
    userEvent.click(bugButton);

    const secondPokemonImg = screen.getByAltText('Caterpie sprite');
    expect(secondPokemonImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/8/83/Spr_5b_010.png');
  });
});
