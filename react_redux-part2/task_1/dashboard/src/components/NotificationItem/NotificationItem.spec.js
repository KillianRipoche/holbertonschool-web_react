import { render, screen, fireEvent } from '@testing-library/react';
import NotificationItem from './NotificationItem';

test('renders notification text and has default type attribute', () => {
  render(
    <NotificationItem
      id={1}
      type="default"
      value="New course available"
      markAsRead={jest.fn()}
    />
  );

  const item = screen.getByRole('listitem');
  expect(item).toBeInTheDocument();
  expect(item).toHaveTextContent('New course available');
  expect(item).toHaveAttribute('data-notification-type', 'default');
});

test('renders notification text and has urgent type attribute', () => {
  render(
    <NotificationItem
      id={2}
      type="urgent"
      value="Urgent requirement"
      markAsRead={jest.fn()}
    />
  );

  const item = screen.getByRole('listitem');
  expect(item).toBeInTheDocument();
  expect(item).toHaveTextContent('Urgent requirement');
  expect(item).toHaveAttribute('data-notification-type', 'urgent');
});

test('calls markAsRead with correct id when clicked', () => {
  const mockMarkAsRead = jest.fn();

  render(
    <NotificationItem
      id={42}
      type="default"
      value="Test notification"
      markAsRead={mockMarkAsRead}
    />
  );

  fireEvent.click(screen.getByRole('listitem'));

  expect(mockMarkAsRead).toHaveBeenCalledTimes(1);
  expect(mockMarkAsRead).toHaveBeenCalledWith(42);
});
