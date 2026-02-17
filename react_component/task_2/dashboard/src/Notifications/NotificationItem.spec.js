import { render, screen, fireEvent } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

describe('NotificationItem component', () => {
  test('renders without crashing', () => {
    render(<NotificationItem type="default" value="test" />);
  });

  test('renders default notification with blue color', () => {
    render(<NotificationItem type="default" value="Test notification" />);
    const item = screen.getByText('Test notification');
    expect(item).toHaveAttribute('data-notification-type', 'default');
    expect(item).toHaveStyle('color: blue');
  });

  test('renders urgent notification with red color', () => {
    render(<NotificationItem type="urgent" value="Test urgent notification" />);
    const item = screen.getByText('Test urgent notification');
    expect(item).toHaveAttribute('data-notification-type', 'urgent');
    expect(item).toHaveStyle('color: red');
  });

  test('calls markAsRead when clicked', () => {
    const markAsRead = jest.fn();
    render(<NotificationItem type="default" value="Test" id={1} markAsRead={markAsRead} />);
    const item = screen.getByText('Test');
    fireEvent.click(item);
    expect(markAsRead).toHaveBeenCalledTimes(1);
    expect(markAsRead).toHaveBeenCalledWith(1);
  });
});
