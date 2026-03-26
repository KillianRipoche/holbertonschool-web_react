import mockAxios from 'jest-mock-axios';
import coursesReducer, { fetchCourses, selectCourse, unSelectCourse } from '../courses/coursesSlice';
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

  it('should fetch courses correctly and add isSelected: false to each course', async () => {
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

    const nextState = coursesReducer(initialState, fulfilledCall[0]);
    expect(nextState.courses).toHaveLength(3);
    nextState.courses.forEach((course) => {
      expect(course.isSelected).toBe(false);
    });
  });

  it('should set isSelected to true when selectCourse is dispatched', () => {
    const stateWithCourses = {
      courses: [
        { id: 1, name: 'ES6', credit: 60, isSelected: false },
        { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      ],
    };

    const nextState = coursesReducer(stateWithCourses, selectCourse(1));
    expect(nextState.courses[0].isSelected).toBe(true);
    expect(nextState.courses[1].isSelected).toBe(false);
  });

  it('should set isSelected to false when unSelectCourse is dispatched', () => {
    const stateWithCourses = {
      courses: [
        { id: 1, name: 'ES6', credit: 60, isSelected: true },
        { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      ],
    };

    const nextState = coursesReducer(stateWithCourses, unSelectCourse(1));
    expect(nextState.courses[0].isSelected).toBe(false);
    expect(nextState.courses[1].isSelected).toBe(true);
  });

  it('should reset courses to empty when logout action is dispatched', () => {
    const stateWithCourses = {
      courses: [
        { id: 1, name: 'ES6', credit: 60, isSelected: false },
        { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      ],
    };

    const nextState = coursesReducer(stateWithCourses, logout());
    expect(nextState.courses).toEqual([]);
  });
});
