import React from 'react';
import { render, cleanup } from '@testing-library/react';
import WithLogging from './WithLogging';

class MockApp extends React.Component {
  render() {
    return (
      <h1>Hello from Mock App Component</h1>
    );
  }
}

const MockAppWithLogging = WithLogging(MockApp);

describe('WithLogging HOC', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders wrapped component correctly', () => {
    const { getByRole } = render(<MockAppWithLogging />);
    const heading = getByRole('heading', { name: /Hello from Mock App Component/i });
    expect(heading).toBeInTheDocument();
  });

  test('has correct displayName', () => {
    expect(MockAppWithLogging.displayName).toBe('WithLogging(MockApp)');
  });

  test('logs mount and unmount messages', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const { unmount } = render(<MockAppWithLogging />);
    expect(consoleSpy).toHaveBeenCalledWith('Component WithLogging(MockApp) is mounted');
    unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component WithLogging(MockApp) is going to unmount');
    consoleSpy.mockRestore();
  });
});
