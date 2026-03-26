import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import mockAxios from 'jest-mock-axios';
import Notifications from './Notifications';
import rootReducer from '../../app/rootReducer';
import { fetchNotifications } from '../../features/notifications/notificationsSlice';

const defaultPreloaded = {
  auth: { user: { email: '', password: '' }, isLoggedIn: false },
  notifications: { notifications: [], loading: false },
  courses: { courses: [] },
};

const createStore = (preloadedState = defaultPreloaded) =>
  configureStore({ reducer: rootReducer, preloadedState });

const renderWithStore = (preloadedState = defaultPreloaded) => {
  const store = createStore(preloadedState);
  render(<Provider store={store}><Notifications /></Provider>);
  return store;
};

afterEach(() => {
  mockAxios.reset();
});

test('displays notification items after fetchNotifications API call', async () => {
  const store = createStore();

  render(
    <Provider store={store}>
      <Notifications />
    </Provider>
  );

  const thunkPromise = store.dispatch(fetchNotifications());
  mockAxios.mockResponse({
    data: [
      { id: 'a1', author: {}, context: { isRead: false, type: 'default', value: 'New course available' } },
      { id: 'a2', author: {}, context: { isRead: false, type: 'urgent', value: 'New resume available' } },
      { id: 'a3', author: {}, context: { isRead: true, type: 'default', value: 'Already read - excluded' } },
    ],
  });

  await thunkPromise;

  await waitFor(() => {
    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
    expect(screen.queryByText('Already read - excluded')).not.toBeInTheDocument();
  });
});

test('displays "Loading..." when loading state is true', () => {
  renderWithStore({
    ...defaultPreloaded,
    notifications: { notifications: [], loading: true },
  });

  expect(screen.getByText('Loading...')).toBeInTheDocument();
});

test('does not display "Loading..." when loading state is false', () => {
  renderWithStore();

  expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
});

test('clicking "Your notifications" shows the notification drawer', () => {
  renderWithStore();

  const drawer = screen.getByTestId('notification-drawer');
  const initialClass = drawer.className;

  fireEvent.click(screen.getByText(/your notifications/i));

  expect(drawer.className).not.toBe(initialClass);
});

test('clicking close button hides the notification drawer', () => {
  renderWithStore({
    ...defaultPreloaded,
    notifications: {
      notifications: [{ id: '1', type: 'default', value: 'Test notification', isRead: false }],
      loading: false,
    },
  });

  const drawer = screen.getByTestId('notification-drawer');
  const initialClass = drawer.className;

  fireEvent.click(screen.getByText(/your notifications/i));
  expect(drawer.className).not.toBe(initialClass);

  fireEvent.click(screen.getByRole('button', { name: /close/i }));
  expect(drawer.className).toBe(initialClass);
});

test('filter urgent button shows only urgent notifications', () => {
  renderWithStore({
    ...defaultPreloaded,
    notifications: {
      notifications: [
        { id: '1', type: 'urgent', value: 'Urgent notification', isRead: false },
        { id: '2', type: 'default', value: 'Default notification', isRead: false },
      ],
      loading: false,
    },
  });

  fireEvent.click(screen.getByRole('button', { name: /filter urgent/i }));

  expect(screen.getByText('Urgent notification')).toBeInTheDocument();
  expect(screen.queryByText('Default notification')).not.toBeInTheDocument();
});

test('filter default button shows only default notifications', () => {
  renderWithStore({
    ...defaultPreloaded,
    notifications: {
      notifications: [
        { id: '1', type: 'urgent', value: 'Urgent notification', isRead: false },
        { id: '2', type: 'default', value: 'Default notification', isRead: false },
      ],
      loading: false,
    },
  });

  fireEvent.click(screen.getByRole('button', { name: /filter default/i }));

  expect(screen.getByText('Default notification')).toBeInTheDocument();
  expect(screen.queryByText('Urgent notification')).not.toBeInTheDocument();
});

test('clicking filter urgent twice resets to all notifications', () => {
  renderWithStore({
    ...defaultPreloaded,
    notifications: {
      notifications: [
        { id: '1', type: 'urgent', value: 'Urgent notification', isRead: false },
        { id: '2', type: 'default', value: 'Default notification', isRead: false },
      ],
      loading: false,
    },
  });

  const urgentBtn = screen.getByRole('button', { name: /filter urgent/i });
  fireEvent.click(urgentBtn);
  fireEvent.click(urgentBtn);

  expect(screen.getByText('Urgent notification')).toBeInTheDocument();
  expect(screen.getByText('Default notification')).toBeInTheDocument();
});

test('removes notification from list when it is marked as read', () => {
  const store = renderWithStore({
    ...defaultPreloaded,
    notifications: {
      notifications: [
        { id: 1, type: 'default', value: 'Notification 1', isRead: false },
        { id: 2, type: 'urgent', value: 'Notification 2', isRead: false },
      ],
      loading: false,
    },
  });

  const listItems = screen.getAllByRole('listitem');
  fireEvent.click(listItems[0]);

  expect(store.getState().notifications.notifications).toHaveLength(1);
  expect(store.getState().notifications.notifications[0].id).toBe(2);
});
