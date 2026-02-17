import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";

describe('Notifications', () => {
  const mockNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
  ];

  test('"Your notifications" text is always displayed', () => {
    render(<Notifications />);
    expect(screen.getByText(/Your notifications/i)).toBeInTheDocument();
  });

  test('does not display content when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} notifications={mockNotifications} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.queryByText(/Here is the list/i)).not.toBeInTheDocument();
  });

  test('displays content when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} notifications={mockNotifications} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/Here is the list/i)).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('clicking close button logs message', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    render(<Notifications displayDrawer={true} notifications={mockNotifications} />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
    consoleSpy.mockRestore();
  });

  test('clicking a notification item logs correct message', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    render(<Notifications displayDrawer={true} notifications={mockNotifications} />);
    const items = screen.getAllByRole('listitem');
    fireEvent.click(items[0]);
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    consoleSpy.mockRestore();
  });

  test('does not re-render when notifications length stays the same', () => {
    const renderSpy = jest.spyOn(Notifications.prototype, 'render');
    const { rerender } = render(
      <Notifications displayDrawer={true} notifications={mockNotifications} />
    );
    rerender(
      <Notifications displayDrawer={true} notifications={mockNotifications} />
    );
    expect(renderSpy).toHaveBeenCalledTimes(1);
    renderSpy.mockRestore();
  });

  test('re-renders when notifications length changes', () => {
    const renderSpy = jest.spyOn(Notifications.prototype, 'render');
    const { rerender } = render(
      <Notifications displayDrawer={true} notifications={mockNotifications} />
    );
    const newNotifications = [
      ...mockNotifications,
      { id: 4, type: 'default', value: 'New notification' },
    ];
    rerender(
      <Notifications displayDrawer={true} notifications={newNotifications} />
    );
    expect(renderSpy).toHaveBeenCalledTimes(2);
    renderSpy.mockRestore();
  });
});
