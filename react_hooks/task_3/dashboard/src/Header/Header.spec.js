import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import AppContext from '../Context/context';

describe('Header component', () => {
  test('renders without crashing', () => {
    render(<Header />);
  });

  test('renders the Holberton logo', () => {
    render(<Header />);
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('renders the h1 heading with correct text', () => {
    render(<Header />);
    const heading = screen.getByRole('heading', { level: 1, name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  test('does not render logoutSection with default context', () => {
    render(<Header />);
    const logoutSection = screen.queryByText(/welcome/i);
    expect(logoutSection).not.toBeInTheDocument();
  });

  test('renders logoutSection when user is logged in', () => {
    const contextValue = {
      user: {
        email: 'test@example.com',
        password: 'password123',
        isLoggedIn: true,
      },
      logOut: () => {},
    };

    render(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );

    const logoutSection = screen.getByText(/welcome test@example.com/i);
    expect(logoutSection).toBeInTheDocument();
  });

  test('clicking logout calls the logOut function', () => {
    const logOutSpy = jest.fn();
    const contextValue = {
      user: {
        email: 'test@example.com',
        password: 'password123',
        isLoggedIn: true,
      },
      logOut: logOutSpy,
    };

    render(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );

    const logoutLink = screen.getByText(/logout/i);
    fireEvent.click(logoutLink);

    expect(logOutSpy).toHaveBeenCalledTimes(1);
  });
});
