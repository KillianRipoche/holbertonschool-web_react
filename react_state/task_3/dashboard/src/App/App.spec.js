import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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

  test('does not display CourseList when user is not logged in', () => {
    render(<App />);
    const courseList = screen.queryByRole('table');
    expect(courseList).not.toBeInTheDocument();
  });

  test('displays CourseList when user is logged in', async () => {
    const { container } = render(<App />);

    // Simulate login by directly updating the component's state
    const appInstance = container.querySelector('.relative').parentElement;

    // Find the login form and submit with valid credentials
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /ok/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    // Wait for CourseList to appear
    await waitFor(() => {
      const courseList = screen.getByRole('table');
      expect(courseList).toBeInTheDocument();
    });
  });

  test('logOut function resets user state', async () => {
    render(<App />);

    // Login first
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /ok/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    // Wait for login to complete
    await waitFor(() => {
      expect(screen.getByRole('table')).toBeInTheDocument();
    });

    // Now logout
    const logoutLink = screen.getByText(/logout/i);
    fireEvent.click(logoutLink);

    // Verify we're back to login screen
    await waitFor(() => {
      expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
    });
  });

  test('Ctrl+H triggers logout', async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();

    render(<App />);

    // Login first
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /ok/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByRole('table')).toBeInTheDocument();
    });

    // Press Ctrl+H
    fireEvent.keyDown(window, { key: 'h', ctrlKey: true });

    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    // Verify logout happened
    await waitFor(() => {
      expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
    });

    alertMock.mockRestore();
  });
});
