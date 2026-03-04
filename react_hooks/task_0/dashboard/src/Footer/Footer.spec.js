import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import AppContext from '../Context/context';

describe('Footer component', () => {
  test('renders without crashing', () => {
    render(<Footer />);
  });

  test('renders copyright text with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(new RegExp(`Copyright ${currentYear}`, 'i'));
    expect(copyrightText).toBeInTheDocument();
  });

  test('does not display Contact us link when user is logged out', () => {
    const contextValue = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: () => {},
    };

    render(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );

    const contactLink = screen.queryByText(/contact us/i);
    expect(contactLink).not.toBeInTheDocument();
  });

  test('displays Contact us link when user is logged in', () => {
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
        <Footer />
      </AppContext.Provider>
    );

    const contactLink = screen.getByText(/contact us/i);
    expect(contactLink).toBeInTheDocument();
  });
});
