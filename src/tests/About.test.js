import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('Testes do componente \'About\'', () => {
  it('verifica se ao renderizar o \'About\' o titulo esta na tela', () => {
    renderWithRouter(<About />);

    const aboutTitle = screen.getByRole('heading', {
      name: 'About Pokédex', level: 2 });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('verifica se ao renderizar o \'About\' o paragrafo esta na tela', () => {
    renderWithRouter(<About />);

    const aboutParagraph = screen.getByText(/simulates a Pokédex, a digital /i);
    const aboutSecondParagraph = screen.getByText(/by type, and see more details /i);
    expect(aboutParagraph).toBeInTheDocument();
    expect(aboutSecondParagraph).toBeInTheDocument();
  });

  it('verifica se ao renderizar o \'About\' a imagem esta na tela', () => {
    renderWithRouter(<About />);

    const aboutImage = screen.getByAltText('Pokédex');
    expect(aboutImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
