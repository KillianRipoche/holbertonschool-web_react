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

  test('clicking on menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    render(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);

    const menuItem = screen.getByText(/Your notifications/i);
    fireEvent.click(menuItem);

    expect(handleDisplayDrawer).toHaveBeenCalledTimes(1);
  });

  test('clicking on close button calls handleHideDrawer', () => {
    const handleHideDrawer = jest.fn();
    render(<Notifications displayDrawer={true} notifications={mockNotifications} handleHideDrawer={handleHideDrawer} />);

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    expect(handleHideDrawer).toHaveBeenCalledTimes(1);
  });

  test('clicking on notification item calls markNotificationAsRead with correct id', () => {
    const markNotificationAsRead = jest.fn();
    render(
      <Notifications
        displayDrawer={true}
        notifications={mockNotifications}
        markNotificationAsRead={markNotificationAsRead}
      />
    );

    const items = screen.getAllByRole('listitem');
    fireEvent.click(items[0]);

    expect(markNotificationAsRead).toHaveBeenCalledTimes(1);
    expect(markNotificationAsRead).toHaveBeenCalledWith(1);
  });
});
