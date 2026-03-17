import mockAxios from 'jest-mock-axios';
import notificationsReducer, {
  fetchNotifications,
  markNotificationAsRead,
  showDrawer,
  hideDrawer,
} from '../notifications/notificationsSlice';
import { getLatestNotification } from '../../utils/utils';

afterEach(() => {
  mockAxios.reset();
});

describe('notificationsSlice', () => {
  const initialState = {
    notifications: [],
    displayDrawer: true,
  };

  it('should return the correct initial state by default', () => {
    expect(notificationsReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should fetch notifications correctly', async () => {
    const mockData = {
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '' } },
      ],
    };

    const dispatch = jest.fn();
    const thunk = fetchNotifications();

    const promise = thunk(dispatch, () => {}, {});

    mockAxios.mockResponse({ data: mockData });

    await promise;

    const fulfilledCall = dispatch.mock.calls.find(
      (call) => call[0].type === 'notifications/fetchNotifications/fulfilled'
    );
    expect(fulfilledCall).toBeTruthy();

    const payload = fulfilledCall[0].payload;
    expect(payload).toHaveLength(3);
    expect(payload[2].value).toBe(getLatestNotification());
  });

  it('should remove a notification when markNotificationAsRead is dispatched', () => {
    const stateWithNotifications = {
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
      ],
      displayDrawer: true,
    };

    const nextState = notificationsReducer(stateWithNotifications, markNotificationAsRead(1));
    expect(nextState.notifications).toHaveLength(1);
    expect(nextState.notifications[0].id).toBe(2);
  });

  it('should set displayDrawer to true when showDrawer is dispatched', () => {
    const stateWithHiddenDrawer = { notifications: [], displayDrawer: false };
    const nextState = notificationsReducer(stateWithHiddenDrawer, showDrawer());
    expect(nextState.displayDrawer).toBe(true);
  });

  it('should set displayDrawer to false when hideDrawer is dispatched', () => {
    const nextState = notificationsReducer(initialState, hideDrawer());
    expect(nextState.displayDrawer).toBe(false);
  });
});
