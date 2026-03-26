import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Footer from './Footer';
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
  render(<Provider store={store}><Footer /></Provider>);
  return store;
};

test('renders copyright text with current year and Holberton School', () => {
  renderWithStore();

  const footerParagraph = screen.getByText(/copyright/i);
  expect(footerParagraph).toHaveTextContent(
    new RegExp(`copyright ${new Date().getFullYear()}`, 'i')
  );
  expect(footerParagraph).toHaveTextContent(/holberton school/i);
});

test('Contact us link is displayed when isLoggedIn is true', () => {
  renderWithStore({
    ...defaultPreloaded,
    auth: { user: { email: 'test@test.com', password: '' }, isLoggedIn: true },
  });

  expect(screen.getByText(/contact us/i)).toBeInTheDocument();
});

test('Contact us link is not displayed when isLoggedIn is false', () => {
  renderWithStore();

  expect(screen.queryByText(/contact us/i)).not.toBeInTheDocument();
});
