import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import mockAxios from 'jest-mock-axios';
import CourseList from './CourseList';
import rootReducer from '../../app/rootReducer';
import { fetchCourses } from '../../features/courses/coursesSlice';
import { logout } from '../../features/auth/authSlice';

const defaultPreloaded = {
  auth: { user: { email: '', password: '' }, isLoggedIn: false },
  notifications: { notifications: [], loading: false },
  courses: { courses: [] },
};

const createStore = (preloadedState = defaultPreloaded) =>
  configureStore({ reducer: rootReducer, preloadedState });

afterEach(() => {
  mockAxios.reset();
});

test('displays courses after fetchCourses API call', async () => {
  const store = createStore();

  render(
    <Provider store={store}>
      <CourseList />
    </Provider>
  );

  const thunkPromise = store.dispatch(fetchCourses());
  mockAxios.mockResponse({
    data: {
      courses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    },
  });

  await thunkPromise;

  await waitFor(() => {
    expect(screen.getByText('ES6')).toBeInTheDocument();
    expect(screen.getByText('Webpack')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });
});

test('resets courses array to empty when logout action is dispatched', () => {
  const store = createStore({
    ...defaultPreloaded,
    courses: {
      courses: [
        { id: 1, name: 'ES6', credit: 60, isSelected: false },
        { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      ],
    },
  });

  render(
    <Provider store={store}>
      <CourseList />
    </Provider>
  );

  store.dispatch(logout());

  expect(store.getState().courses.courses).toEqual([]);
});

test('checking a checkbox dispatches selectCourse for that course', () => {
  const store = createStore({
    ...defaultPreloaded,
    courses: {
      courses: [
        { id: 1, name: 'ES6', credit: 60, isSelected: false },
        { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      ],
    },
  });

  render(
    <Provider store={store}>
      <CourseList />
    </Provider>
  );

  const checkboxes = screen.getAllByRole('checkbox');
  fireEvent.click(checkboxes[0]);

  expect(store.getState().courses.courses[0].isSelected).toBe(true);
  expect(store.getState().courses.courses[1].isSelected).toBe(false);
});

test('unchecking a checkbox dispatches unSelectCourse for that course', () => {
  const store = createStore({
    ...defaultPreloaded,
    courses: {
      courses: [
        { id: 1, name: 'ES6', credit: 60, isSelected: true },
        { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      ],
    },
  });

  render(
    <Provider store={store}>
      <CourseList />
    </Provider>
  );

  const checkboxes = screen.getAllByRole('checkbox');
  fireEvent.click(checkboxes[0]);

  expect(store.getState().courses.courses[0].isSelected).toBe(false);
});
