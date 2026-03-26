import authReducer, { login, logout } from '../auth/authSlice';

describe('authSlice', () => {
  const initialState = {
    user: {
      email: '',
      password: '',
    },
    isLoggedIn: false,
  };

  it('should return the correct initial state by default', () => {
    expect(authReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should update the state correctly when login action is dispatched', () => {
    const payload = { email: 'test@test.com', password: 'password123' };
    const nextState = authReducer(undefined, login(payload));

    expect(nextState.user.email).toBe(payload.email);
    expect(nextState.user.password).toBe(payload.password);
    expect(nextState.isLoggedIn).toBe(true);
  });

  it('should reset the state correctly when logout action is dispatched', () => {
    const loggedInState = {
      user: { email: 'test@test.com', password: 'password123' },
      isLoggedIn: true,
    };
    const nextState = authReducer(loggedInState, logout());

    expect(nextState.user.email).toBe('');
    expect(nextState.user.password).toBe('');
    expect(nextState.isLoggedIn).toBe(false);
  });
});
