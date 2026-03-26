import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from '../App';
import mockAxios from 'jest-mock-axios';
import rootReducer from '../app/rootReducer';

const mockNotificationsResponse = {
  data: [
    { id: 'a1', author: {}, context: { isRead: false, type: 'default', value: 'New course available' } },
    { id: 'a2', author: {}, context: { isRead: false, type: 'urgent', value: 'New resume available' } },
    { id: 'a3', author: {}, context: { isRead: true, type: 'urgent', value: 'Read notification' } },
  ],
};

const mockCoursesResponse = {
  data: {
    courses: [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ],
  },
};

const createStore = (preloadedState = {}) =>
  configureStore({ reducer: rootReducer, preloadedState });

const renderWithStore = (preloadedState = {}) => {
  const store = createStore(preloadedState);
  return render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

afterEach(() => {
  mockAxios.reset();
});

test('renders Login component when isLoggedIn is false', async () => {
  renderWithStore({
    auth: { user: { email: '', password: '' }, isLoggedIn: false },
    notifications: { notifications: [], loading: false },
    courses: { courses: [] },
  });

  mockAxios.mockResponse(mockNotificationsResponse);

  await waitFor(() => {
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });
});

test('renders CourseList component when isLoggedIn is true', async () => {
  renderWithStore({
    auth: { user: { email: 'test@test.com', password: 'pass' }, isLoggedIn: true },
    notifications: { notifications: [], loading: false },
    courses: { courses: [] },
  });

  mockAxios.mockResponse(mockNotificationsResponse);
  mockAxios.mockResponse(mockCoursesResponse);

  await waitFor(() => {
    expect(screen.getByRole('heading', { name: /course list/i })).toBeInTheDocument();
  });
});

test('displays notification items on mount after fetching', async () => {
  renderWithStore({
    auth: { user: { email: '', password: '' }, isLoggedIn: false },
    notifications: { notifications: [], loading: false },
    courses: { courses: [] },
  });

  mockAxios.mockResponse(mockNotificationsResponse);

  await waitFor(() => {
    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
  });
});
