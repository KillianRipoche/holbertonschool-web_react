import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders School dashboard heading', () => {
    render(<App />);
    const headingElement = screen.getByRole('heading', {
      name: /school dashboard/i
    });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders login text in App-body', () => {
    render(<App />);
    const bodyText = screen.getByText(/login to access the full dashboard/i);
    expect(bodyText).toBeInTheDocument();
  });

  test('renders copyright text in App-footer', () => {
    render(<App />);
    const footerText = screen.getByText(/copyright \d{4} - holberton school/i);
    expect(footerText).toBeInTheDocument();
  });

  test('renders an image with alt text', () => {
    render(<App />);
    const image = screen.getByAltText(/holberton logo/i);
    expect(image).toBeInTheDocument();
  });

  test('renders 2 input elements', () => {
    render(<App />);
    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(1); // email input
    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput.type).toBe('password');
  });

  test('renders 2 label elements with text Email and Password', () => {
    render(<App />);
    const emailLabel = screen.getByText(/email/i);
    const passwordLabel = screen.getByText(/password/i);
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });

  test('renders a button with text OK', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /ok/i });
    expect(button).toBeInTheDocument();
  });
});
