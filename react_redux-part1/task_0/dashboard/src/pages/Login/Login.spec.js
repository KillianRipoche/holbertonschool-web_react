import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
  test('renders without crashing', () => {
    render(<Login />);
  });

  test('renders email and password inputs', () => {
    render(<Login />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test('submit button is disabled by default', () => {
    render(<Login />);
    const submitButton = screen.getByRole('button', { name: /ok/i });
    expect(submitButton).toBeDisabled();
  });

  test('submit button is enabled after entering valid email and password', () => {
    render(<Login />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /ok/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(submitButton).toBeEnabled();
  });

  test('logIn method is called with email and password on form submit', () => {
    const logInMock = jest.fn();
    render(<Login logIn={logInMock} />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const form = screen.getByRole('button', { name: /ok/i }).closest('form');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.submit(form);

    expect(logInMock).toHaveBeenCalledTimes(1);
    expect(logInMock).toHaveBeenCalledWith('test@example.com', 'password123');
  });
});
