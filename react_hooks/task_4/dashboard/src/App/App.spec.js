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

  test('handleDisplayDrawer sets displayDrawer to true', async () => {
    render(<App />);

    // Notifications should be visible by default (displayDrawer = true)
    const notificationTitle = screen.getByText(/Your notifications/i);
    expect(notificationTitle).toBeInTheDocument();
  });

  test('handleHideDrawer sets displayDrawer to false', async () => {
    render(<App />);

    // Close the drawer
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    // Notifications panel should be hidden
    await waitFor(() => {
      const notificationItems = screen.queryByText(/Here is the list of notifications/i);
      expect(notificationItems).not.toBeInTheDocument();
    });
  });

  test('logIn updates user state correctly', async () => {
    render(<App />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /ok/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const welcomeMessage = screen.getByText(/welcome test@example.com/i);
      expect(welcomeMessage).toBeInTheDocument();
    });
  });

  test('logOut clears user state', async () => {
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

    // Now logout
    const logoutLink = screen.getByText(/logout/i);
    fireEvent.click(logoutLink);

    await waitFor(() => {
      expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
    });
  });

  test('clicking on notification item removes it and logs to console', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    render(<App />);

    await waitFor(() => {
      expect(screen.getAllByRole('listitem')).toHaveLength(3);
    });

    const items = screen.getAllByRole('listitem');
    fireEvent.click(items[0]);

    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

    await waitFor(() => {
      const remainingItems = screen.getAllByRole('listitem');
      expect(remainingItems).toHaveLength(2);
    });

    consoleSpy.mockRestore();
  });
});
