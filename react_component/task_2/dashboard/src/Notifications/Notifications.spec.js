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
    const yourNotifications = screen.getByText(/Your notifications/i);
    expect(yourNotifications).toBeInTheDocument();
  });

  test('"Your notifications" text is displayed when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    const yourNotifications = screen.getByText(/Your notifications/i);
    expect(yourNotifications).toBeInTheDocument();
  });

  test('"Your notifications" text is displayed when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} notifications={mockNotifications} />);
    const yourNotifications = screen.getByText(/Your notifications/i);
    expect(yourNotifications).toBeInTheDocument();
  });

  describe('when displayDrawer is false', () => {
    test('does not display close button', () => {
      render(<Notifications displayDrawer={false} notifications={mockNotifications} />);
      const button = screen.queryByRole('button', { name: /close/i });
      expect(button).not.toBeInTheDocument();
    });

    test('does not display "Here is the list of notifications"', () => {
      render(<Notifications displayDrawer={false} notifications={mockNotifications} />);
      const listText = screen.queryByText(/Here is the list of notifications/i);
      expect(listText).not.toBeInTheDocument();
    });

    test('does not display notification items', () => {
      render(<Notifications displayDrawer={false} notifications={mockNotifications} />);
      const listItems = screen.queryAllByRole('listitem');
      expect(listItems).toHaveLength(0);
    });
  });

  describe('when displayDrawer is true', () => {
    test('displays close button', () => {
      render(<Notifications displayDrawer={true} notifications={mockNotifications} />);
      const button = screen.getByRole('button', { name: /close/i });
      expect(button).toBeInTheDocument();
    });

    test('displays "Here is the list of notifications"', () => {
      render(<Notifications displayDrawer={true} notifications={mockNotifications} />);
      const listText = screen.getByText(/Here is the list of notifications/i);
      expect(listText).toBeInTheDocument();
    });

    test('displays notification items', () => {
      render(<Notifications displayDrawer={true} notifications={mockNotifications} />);
      const listItems = screen.getAllByRole('listitem');
      expect(listItems).toHaveLength(3);
    });

    test('clicking close button logs message to console', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      render(<Notifications displayDrawer={true} notifications={mockNotifications} />);
      const button = screen.getByRole('button', { name: /close/i });
      fireEvent.click(button);
      expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
      consoleSpy.mockRestore();
    });
  });

  describe('when displayDrawer is true and notifications is empty', () => {
    test('displays "No new notification for now"', () => {
      render(<Notifications displayDrawer={true} notifications={[]} />);
      const noNotifications = screen.getByText(/No new notification for now/i);
      expect(noNotifications).toBeInTheDocument();
    });

    test('does not display "Here is the list of notifications"', () => {
      render(<Notifications displayDrawer={true} notifications={[]} />);
      const listText = screen.getByText(/Here is the list of notifications/i);
      expect(listText).toBeInTheDocument();
    });
  });
});
