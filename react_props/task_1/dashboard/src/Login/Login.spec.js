import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login component', () => {
  test('renders without crashing', () => {
    render(<Login />);
  });

  test('renders 2 label, 2 input, and 1 button elements', () => {
    render(<Login />);

    const emailLabel = screen.getByText(/email/i);
    const passwordLabel = screen.getByText(/password/i);
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /ok/i });
    expect(button).toBeInTheDocument();
  });

  test('inputs get focused when related label is clicked', async () => {
    const user = userEvent.setup();
    render(<Login />);

    const emailLabel = screen.getByText(/email/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordLabel = screen.getByText(/password/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await user.click(emailLabel);
    expect(emailInput).toHaveFocus();

    await user.click(passwordLabel);
    expect(passwordInput).toHaveFocus();
  });
});
