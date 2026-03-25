import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import mockAxios from 'jest-mock-axios';
import Notifications from './Notifications';
import rootReducer from '../../app/rootReducer';
import { fetchNotifications } from '../../features/notifications/notificationsSlice';

const defaultPreloaded = {
  auth: { user: { email: '', password: '' }, isLoggedIn: false },
  notifications: { notifications: [], displayDrawer: true },
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
    data: {
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
      ],
    },
  });

  await thunkPromise;

  await waitFor(() => {
    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
  });
});

test('sets displayDrawer to false when close button is clicked', () => {
  const store = renderWithStore({
    ...defaultPreloaded,
    notifications: {
      notifications: [{ id: 1, type: 'default', value: 'Test notification' }],
      displayDrawer: true,
    },
  });

  fireEvent.click(screen.getByRole('button', { name: /close/i }));

  expect(store.getState().notifications.displayDrawer).toBe(false);
});

test('sets displayDrawer to true when "Your notifications" is clicked', () => {
  const store = renderWithStore({
    ...defaultPreloaded,
    notifications: {
      notifications: [],
      displayDrawer: false,
    },
  });

  fireEvent.click(screen.getByText(/your notifications/i));

  expect(store.getState().notifications.displayDrawer).toBe(true);
});

test('removes notification from list when it is marked as read', () => {
  const store = renderWithStore({
    ...defaultPreloaded,
    notifications: {
      notifications: [
        { id: 1, type: 'default', value: 'Notification 1' },
        { id: 2, type: 'urgent', value: 'Notification 2' },
      ],
      displayDrawer: true,
    },
  });

  const listItems = screen.getAllByRole('listitem');
  fireEvent.click(listItems[0]);

  expect(store.getState().notifications.notifications).toHaveLength(1);
  expect(store.getState().notifications.notifications[0].id).toBe(2);
});
