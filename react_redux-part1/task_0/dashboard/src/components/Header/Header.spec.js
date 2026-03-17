import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

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

  test('does not render logoutSection with logged out user', () => {
    const user = { email: '', password: '', isLoggedIn: false };
    render(<Header user={user} />);
    const logoutSection = screen.queryByText(/welcome/i);
    expect(logoutSection).not.toBeInTheDocument();
  });

  test('renders logoutSection when user is logged in', () => {
    const user = { email: 'test@example.com', password: 'password123', isLoggedIn: true };
    render(<Header user={user} />);
    const logoutSection = screen.getByText(/welcome test@example.com/i);
    expect(logoutSection).toBeInTheDocument();
  });

  test('clicking logout calls the logOut function', () => {
    const logOutSpy = jest.fn();
    const user = { email: 'test@example.com', password: 'password123', isLoggedIn: true };
    render(<Header user={user} logOut={logOutSpy} />);
    const logoutLink = screen.getByText(/logout/i);
    fireEvent.click(logoutLink);
    expect(logOutSpy).toHaveBeenCalledTimes(1);
  });
});
