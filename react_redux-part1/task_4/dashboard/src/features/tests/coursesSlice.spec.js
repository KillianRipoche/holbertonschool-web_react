import mockAxios from 'jest-mock-axios';
import coursesReducer, { fetchCourses } from '../courses/coursesSlice';
import { logout } from '../auth/authSlice';

afterEach(() => {
  mockAxios.reset();
});

describe('coursesSlice', () => {
  const initialState = {
    courses: [],
  };

  it('should return the correct initial state by default', () => {
    expect(coursesReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should fetch courses correctly', async () => {
    const mockData = {
      courses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    };

    const dispatch = jest.fn();
    const thunk = fetchCourses();

    const promise = thunk(dispatch, () => {}, {});

    mockAxios.mockResponse({ data: mockData });

    await promise;

    const fulfilledCall = dispatch.mock.calls.find(
      (call) => call[0].type === 'courses/fetchCourses/fulfilled'
    );
    expect(fulfilledCall).toBeTruthy();
    expect(fulfilledCall[0].payload).toEqual(mockData.courses);
  });

  it('should reset courses to empty when logout action is dispatched', () => {
    const stateWithCourses = {
      courses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
      ],
    };

    const nextState = coursesReducer(stateWithCourses, logout());
    expect(nextState.courses).toEqual([]);
  });
});
