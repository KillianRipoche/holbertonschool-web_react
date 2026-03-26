import mockAxios from 'jest-mock-axios';
import notificationsReducer, {
  fetchNotifications,
  markNotificationAsRead,
} from '../notifications/notificationsSlice';

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

  it('should fetch and transform only unread notifications', async () => {
    const mockData = [
      { id: 'a1', author: {}, context: { isRead: false, type: 'default', value: 'Unread default' } },
      { id: 'a2', author: {}, context: { isRead: true, type: 'urgent', value: 'Read urgent - excluded' } },
      { id: 'a3', author: {}, context: { isRead: false, type: 'urgent', value: 'Unread urgent' } },
    ];

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
    expect(payload).toHaveLength(2);
    expect(payload[0]).toEqual({ id: 'a1', type: 'default', isRead: false, value: 'Unread default' });
    expect(payload[1]).toEqual({ id: 'a3', type: 'urgent', isRead: false, value: 'Unread urgent' });
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
        { id: 1, type: 'default', value: 'Notification 1', isRead: false },
        { id: 2, type: 'urgent', value: 'Notification 2', isRead: false },
      ],
      loading: false,
    };

    const nextState = notificationsReducer(stateWithNotifications, markNotificationAsRead(1));
    expect(nextState.notifications).toHaveLength(1);
    expect(nextState.notifications[0].id).toBe(2);
  });
});
