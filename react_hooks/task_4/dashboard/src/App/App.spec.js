import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

describe('App component', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
      ]
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the main heading', async () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1, name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders the Holberton logo image', async () => {
    render(<App />);
    const image = screen.getByAltText(/holberton logo/i);
    expect(image).toBeInTheDocument();
  });

  test('default state shows Login component', async () => {
    render(<App />);
    const loginText = screen.getByText(/login to access the full dashboard/i);
    expect(loginText).toBeInTheDocument();
  });

  test('fetches notifications on mount', async () => {
    render(<App />);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith('/notifications.json');
    });
  });

  test('handleDisplayDrawer sets displayDrawer to true', async () => {
    render(<App />);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });

    const notificationTitle = screen.getByText(/Your notifications/i);
    fireEvent.click(notificationTitle);

    await waitFor(() => {
      const notificationText = screen.getByText(/Here is the list of notifications/i);
      expect(notificationText).toBeInTheDocument();
    });
  });

  test('handleHideDrawer sets displayDrawer to false', async () => {
    render(<App />);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });

    const notificationTitle = screen.getByText(/Your notifications/i);
    fireEvent.click(notificationTitle);

    await waitFor(() => {
      const closeButton = screen.getByRole('button', { name: /close/i });
      fireEvent.click(closeButton);
    });

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

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /ok/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByRole('table')).toBeInTheDocument();
    });

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
      expect(axios.get).toHaveBeenCalled();
    });

    const notificationTitle = screen.getByText(/Your notifications/i);
    fireEvent.click(notificationTitle);

    await waitFor(() => {
      const items = screen.getAllByRole('listitem');
      expect(items).toHaveLength(3);
      fireEvent.click(items[0]);
    });

    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

    await waitFor(() => {
      const remainingItems = screen.getAllByRole('listitem');
      expect(remainingItems).toHaveLength(2);
    });

    consoleSpy.mockRestore();
  });
});
