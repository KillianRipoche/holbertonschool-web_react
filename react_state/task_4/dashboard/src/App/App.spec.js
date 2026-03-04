import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  // ... tous les tests précédents ...

  test('clicking on notification item removes it and logs to console', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    const { container } = render(<App />);

    // Open notifications
    const notificationTitle = screen.getByText(/Your notifications/i);
    fireEvent.click(notificationTitle);

    await waitFor(() => {
      expect(screen.getAllByRole('listitem')).toHaveLength(3);
    });

    // Click on first notification
    const items = screen.getAllByRole('listitem');
    fireEvent.click(items[0]);

    // Check console log
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

    // Check notification is removed
    await waitFor(() => {
      const remainingItems = screen.getAllByRole('listitem');
      expect(remainingItems).toHaveLength(2);
    });

    consoleSpy.mockRestore();
  });
});
