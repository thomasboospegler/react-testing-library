import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testes do componente \'App\'', () => {
  it('verifica se ao renderizar o \'App\' as 3 tags link estão na tela', () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /Home/i });
    const linkAbout = screen.getByRole('link', { name: /About/i });
    const linkFavorite = screen.getByRole('link', { name: /Favorite/i });

    expect(linkHome).toBeInTheDocument();
    expect(linkAbout).toBeInTheDocument();
    expect(linkFavorite).toBeInTheDocument();
  });

  it('verifica se a aplicação é redirecionada para \'/\' ao clicar em \'Home\' ', () => {
    const { history } = renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: /Home/i });
    expect(linkHome).toBeInTheDocument();
    userEvent.click(linkHome);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it('verifica se a aplicação é redirecionada para \'/about\' ao clicar em \'About\' ',
    () => {
      const { history } = renderWithRouter(<App />);

      const linkAbout = screen.getByRole('link', { name: /About/i });
      expect(linkAbout).toBeInTheDocument();
      userEvent.click(linkAbout);

      const { pathname } = history.location;
      expect(pathname).toBe('/about');
    });

  it('verifica se a aplicação é redirecionada para /favorites ao clicar em \'Favorites\'',
    () => {
      const { history } = renderWithRouter(<App />);

      const linkFavorite = screen.getByRole('link', { name: /Favorite/i });
      expect(linkFavorite).toBeInTheDocument();
      userEvent.click(linkFavorite);

      const { pathname } = history.location;
      expect(pathname).toBe('/favorites');
    });

  it('verifica se a aplicação é redirecionada para /notFound caso a URL estiver errada',
    () => {
      const { history } = renderWithRouter(<App />);

      history.push('/xablau');

      const notFoundTitle = screen.getByRole('heading',
        { name: /Page requested not found/i, level: 2 });
      expect(notFoundTitle).toBeInTheDocument();
    });

  it('verifica se o pokemon é adicionado aos favoritos e depois é removido',
    () => {
      const { history } = renderWithRouter(<App />);

      const linkAbout = screen.getByRole('link', { name: /More details/i });
      expect(linkAbout).toBeInTheDocument();
      userEvent.click(linkAbout);

      const { pathname } = history.location;
      expect(pathname).toBe('/pokemons/25');

      const checkboxFav = screen.getByLabelText('Pokémon favoritado?');
      userEvent.click(checkboxFav);

      const favoriteImg = screen.getByAltText('Pikachu is marked as favorite');
      expect(favoriteImg).toHaveAttribute('src', '/star-icon.svg');

      userEvent.click(checkboxFav);
      expect(favoriteImg).not.toBeInTheDocument();
    });
});
