import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('renders the notifications title', () => {
    render(<Notifications />);
    const title = screen.getByText(/here is the list of notifications/i);
    expect(title).toBeInTheDocument();
  });

  test('renders the close button', () => {
    render(<Notifications />);
    const button = screen.getByRole('button', { name: /close/i });
    expect(button).toBeInTheDocument();
  });

  test('renders 3 list items', () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  test('clicking close button logs message to console', () => {
    // Mock console.log
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    render(<Notifications />);
    const button = screen.getByRole('button', { name: /close/i });

    // Simulate click
    fireEvent.click(button);

    // Check if console.log was called with the correct message
    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');

    // Clean up the mock
    consoleSpy.mockRestore();
  });
});
