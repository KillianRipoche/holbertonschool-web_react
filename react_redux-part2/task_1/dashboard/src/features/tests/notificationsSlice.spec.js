import mockAxios from 'jest-mock-axios';
import notificationsReducer, {
  fetchNotifications,
  markNotificationAsRead,
} from '../notifications/notificationsSlice';
import { getLatestNotification } from '../../utils/utils';

afterEach(() => {
  mockAxios.reset();
});

describe('notificationsSlice', () => {
  const initialState = {
    notifications: [],
    loading: false,
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

  it('should set loading to true when fetchNotifications is pending', () => {
    const nextState = notificationsReducer(initialState, { type: fetchNotifications.pending.type });
    expect(nextState.loading).toBe(true);
  });

  it('should set loading to false when fetchNotifications is fulfilled', () => {
    const pendingState = { ...initialState, loading: true };
    const nextState = notificationsReducer(pendingState, {
      type: fetchNotifications.fulfilled.type,
      payload: [],
    });
    expect(nextState.loading).toBe(false);
  });

  it('should set loading to false when fetchNotifications is rejected', () => {
    const pendingState = { ...initialState, loading: true };
    const nextState = notificationsReducer(pendingState, { type: fetchNotifications.rejected.type });
    expect(nextState.loading).toBe(false);
  });

  it('should remove a notification when markNotificationAsRead is dispatched', () => {
    const stateWithNotifications = {
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
      ],
      loading: false,
    };

    const nextState = notificationsReducer(stateWithNotifications, markNotificationAsRead(1));
    expect(nextState.notifications).toHaveLength(1);
    expect(nextState.notifications[0].id).toBe(2);
  });
});
