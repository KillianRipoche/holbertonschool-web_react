import { render, screen, within, fireEvent } from '@testing-library/react';
import CourseListRow from './CourseListRow';

test('renders header row with one cell that spans two columns', () => {
  render(
    <table>
      <tbody>
        <CourseListRow isHeader={true} textFirstCell="Available courses" textSecondCell={null} />
      </tbody>
    </table>
  );

  const thElement = screen.getByRole('columnheader');
  expect(thElement).toHaveAttribute('colSpan', '2');
});

test('renders header row with two cells when textSecondCell is provided', () => {
  render(
    <table>
      <tbody>
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </tbody>
    </table>
  );

  const thElements = screen.getAllByRole('columnheader');
  expect(thElements).toHaveLength(2);
  expect(thElements[0]).toHaveTextContent('Course name');
  expect(thElements[1]).toHaveTextContent('Credit');
});

test('renders regular row with two td cells and a checkbox', () => {
  render(
    <table>
      <tbody>
        <CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />
      </tbody>
    </table>
  );

  const trElement = screen.getByRole('row');
  const tdElements = within(trElement).getAllByRole('cell');

  expect(trElement).toBeInTheDocument();
  expect(tdElements).toHaveLength(2);
  expect(tdElements[0]).toHaveTextContent('ES6');
  expect(tdElements[1]).toHaveTextContent('60');
  expect(within(tdElements[0]).getByRole('checkbox')).toBeInTheDocument();
});

test('checkbox reflects isSelected prop', () => {
  render(
    <table>
      <tbody>
        <CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" isSelected={true} changeRow={() => {}} />
      </tbody>
    </table>
  );

  expect(screen.getByRole('checkbox')).toBeChecked();
});

test('calls changeRow with id and checked state when checkbox changes', () => {
  const mockChangeRow = jest.fn();

  render(
    <table>
      <tbody>
        <CourseListRow
          isHeader={false}
          id={1}
          textFirstCell="ES6"
          textSecondCell="60"
          isSelected={false}
          changeRow={mockChangeRow}
        />
      </tbody>
    </table>
  );

  fireEvent.click(screen.getByRole('checkbox'));

  expect(mockChangeRow).toHaveBeenCalledTimes(1);
  expect(mockChangeRow).toHaveBeenCalledWith(1, true);
});
