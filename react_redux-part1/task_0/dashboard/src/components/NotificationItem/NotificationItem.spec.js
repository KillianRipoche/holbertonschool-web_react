import { render, screen, fireEvent } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

describe('NotificationItem component', () => {
  test('renders without crashing', () => {
    render(<NotificationItem type="default" value="test" />);
  });

  test('renders with correct text', () => {
    render(<NotificationItem type="default" value="Test notification" />);
    const item = screen.getByText('Test notification');
    expect(item).toBeInTheDocument();
  });

  test('calls markAsRead when clicked', () => {
    const markAsRead = jest.fn();
    render(<NotificationItem type="default" value="Test" id={1} markAsRead={markAsRead} />);
    const item = screen.getByText('Test');
    fireEvent.click(item);
    expect(markAsRead).toHaveBeenCalledTimes(1);
    expect(markAsRead).toHaveBeenCalledWith(1);
  });

  test('renders html content', () => {
    const htmlContent = { __html: '<strong>Urgent requirement</strong> - complete by EOD' };
    const { container } = render(<NotificationItem type="urgent" html={htmlContent} id={3} />);
    const item = container.querySelector('li');
    expect(item).toBeInTheDocument();
    expect(item.innerHTML).toContain('<strong>Urgent requirement</strong>');
  });
});
