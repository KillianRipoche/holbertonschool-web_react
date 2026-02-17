
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test('App component', () => {
  render(<App />);
});

test('should call logOut function when ctrl+h is pressed', () => {
  // Create a mock function for logOut prop
  const logOutMock = jest.fn();
  // Spy alert and mock alert popup
  const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

  // Render the component with the mock logOut function
  render(<App logOut={logOutMock} />);

  // Simulate the keydown event (Ctrl+h)
  fireEvent.keyDown(document, { key: 'h', ctrlKey: true });

  expect(alertSpy).toHaveBeenCalledWith('Logging you out');
  expect(logOutMock).toHaveBeenCalledTimes(1);

  // Restore alert after test
  alertSpy.mockRestore();
});
