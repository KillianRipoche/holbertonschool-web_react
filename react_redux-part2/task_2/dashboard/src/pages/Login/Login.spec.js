import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Login from './Login';
import rootReducer from '../../app/rootReducer';

const defaultPreloaded = {
  auth: { user: { email: '', password: '' }, isLoggedIn: false },
  notifications: { notifications: [], displayDrawer: true },
  courses: { courses: [] },
};

const createStore = (preloadedState = defaultPreloaded) =>
  configureStore({ reducer: rootReducer, preloadedState });

const renderWithStore = (preloadedState = defaultPreloaded) => {
  const store = createStore(preloadedState);
  const result = render(<Provider store={store}><Login /></Provider>);
  return { store, ...result };
};

test('renders login form with email, password fields and submit button', () => {
  const { container } = renderWithStore();

  const inputElements = container.querySelectorAll(
    'input[type="email"], input[type="text"], input[type="password"]'
  );
  expect(inputElements.length).toBeGreaterThanOrEqual(2);
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'OK' })).toBeInTheDocument();
});

test('email input is focused when its label is clicked', async () => {
  renderWithStore();

  const emailInput = screen.getByLabelText('Email');
  userEvent.click(screen.getByText('Email'));

  await waitFor(() => {
    expect(emailInput).toHaveFocus();
  });
});

test('password input is focused when its label is clicked', async () => {
  renderWithStore();

  const passwordInput = screen.getByLabelText('Password');
  userEvent.click(screen.getByText('Password'));

  await waitFor(() => {
    expect(passwordInput).toHaveFocus();
  });
});

test('submit button is disabled by default', () => {
  renderWithStore();

  expect(screen.getByText('OK')).toBeDisabled();
});

test('submit button is enabled only with valid email and password of at least 8 characters', () => {
  renderWithStore();

  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Password');
  const submitButton = screen.getByText('OK');

  expect(submitButton).toBeDisabled();

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: '123' } });
  expect(submitButton).toBeDisabled();

  fireEvent.change(emailInput, { target: { value: 'test.com' } });
  fireEvent.change(passwordInput, { target: { value: '12345678' } });
  expect(submitButton).toBeDisabled();

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: '12345678' } });
  expect(submitButton).not.toBeDisabled();
});

test('sets isLoggedIn to true after valid credentials are submitted', () => {
  const { store } = renderWithStore();

  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: 'test@test.com' },
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: 'password123' },
  });
  fireEvent.click(screen.getByRole('button', { name: /ok/i }));

  expect(store.getState().auth.isLoggedIn).toBe(true);
});

test('isLoggedIn remains false when credentials are invalid (submit disabled)', () => {
  const { store } = renderWithStore();

  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: 'invalid-email' },
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: '123' },
  });

  expect(screen.getByRole('button', { name: /ok/i })).toBeDisabled();
  expect(store.getState().auth.isLoggedIn).toBe(false);
});
