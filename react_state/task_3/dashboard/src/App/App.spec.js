import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders the main heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1, name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders the Holberton logo image', () => {
    render(<App />);
    const image = screen.getByAltText(/holberton logo/i);
    expect(image).toBeInTheDocument();
  });

  test('default state shows Login component', () => {
    render(<App />);
    const loginText = screen.getByText(/login to access the full dashboard/i);
    expect(loginText).toBeInTheDocument();
  });

  test('calls logOut and shows alert when Ctrl+H is pressed', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();

    render(<App />);

    fireEvent.keyDown(window, { key: 'h', ctrlKey: true });

    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    alertMock.mockRestore();
  });
});
