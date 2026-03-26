import { render, screen } from '@testing-library/react';
import BodySection from './BodySection';

test('renders title and children', () => {
  render(
    <BodySection title="Test Title">
      <p>Test child content</p>
    </BodySection>
  );

  const heading = screen.getByRole('heading', { name: /test title/i });
  expect(heading).toBeInTheDocument();
  expect(screen.getByText('Test child content')).toBeInTheDocument();
});

test('renders multiple children', () => {
  render(
    <BodySection title="Section">
      <p>Child 1</p>
      <p>Child 2</p>
      <p>Child 3</p>
    </BodySection>
  );

  expect(screen.getByText('Child 1')).toBeInTheDocument();
  expect(screen.getByText('Child 2')).toBeInTheDocument();
  expect(screen.getByText('Child 3')).toBeInTheDocument();
});
