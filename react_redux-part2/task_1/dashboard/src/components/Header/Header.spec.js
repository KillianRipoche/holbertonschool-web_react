import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Header from './Header';
import rootReducer from '../../app/rootReducer';
import { login } from '../../features/auth/authSlice';

const defaultPreloaded = {
  auth: { user: { email: '', password: '' }, isLoggedIn: false },
  notifications: { notifications: [], displayDrawer: true },
  courses: { courses: [] },
};

const createStore = (preloadedState = defaultPreloaded) =>
  configureStore({ reducer: rootReducer, preloadedState });

const renderWithStore = (preloadedState = defaultPreloaded) => {
  const store = createStore(preloadedState);
  render(<Provider store={store}><Header /></Provider>);
  return store;
};

test('displays logout link when isLoggedIn is true', () => {
  renderWithStore({
    ...defaultPreloaded,
    auth: { user: { email: 'test@test.com', password: '' }, isLoggedIn: true },
  });

  expect(screen.getByText(/logout/i)).toBeInTheDocument();
});

test('displays welcome message with email after login action is dispatched', () => {
  const store = createStore();
  store.dispatch(login({ email: 'test@test.com', password: 'pass' }));

  render(<Provider store={store}><Header /></Provider>);

  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  expect(screen.getByText(/test@test.com/i)).toBeInTheDocument();
});

test('sets isLoggedIn to false when logout link is clicked', () => {
  const store = createStore({
    ...defaultPreloaded,
    auth: { user: { email: 'test@test.com', password: '' }, isLoggedIn: true },
  });

  render(<Provider store={store}><Header /></Provider>);

  fireEvent.click(screen.getByText(/logout/i));

  expect(store.getState().auth.isLoggedIn).toBe(false);
});
