import { render, screen } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

test('renders title and children', () => {
  render(
    <BodySectionWithMarginBottom title="Test Title">
      <p>Child content</p>
    </BodySectionWithMarginBottom>
  );

  expect(screen.getByRole('heading', { name: /test title/i })).toBeInTheDocument();
  expect(screen.getByText('Child content')).toBeInTheDocument();
});

test('renders with multiple children', () => {
  render(
    <BodySectionWithMarginBottom title="Section">
      <p>First child</p>
      <span>Second child</span>
    </BodySectionWithMarginBottom>
  );

  expect(screen.getByText('First child')).toBeInTheDocument();
  expect(screen.getByText('Second child')).toBeInTheDocument();
});
