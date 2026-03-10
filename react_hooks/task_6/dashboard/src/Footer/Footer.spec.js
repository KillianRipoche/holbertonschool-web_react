import { render, screen } from '@testing-library/react';
import Footer from './Footer';

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
    const user = { isLoggedIn: false };
    render(<Footer user={user} />);
    const contactLink = screen.queryByText(/contact us/i);
    expect(contactLink).not.toBeInTheDocument();
  });

  test('displays Contact us link when user is logged in', () => {
    const user = { isLoggedIn: true };
    render(<Footer user={user} />);
    const contactLink = screen.getByText(/contact us/i);
    expect(contactLink).toBeInTheDocument();
  });
});
