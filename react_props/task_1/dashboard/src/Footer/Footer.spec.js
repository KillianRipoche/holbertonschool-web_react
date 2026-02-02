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
});
