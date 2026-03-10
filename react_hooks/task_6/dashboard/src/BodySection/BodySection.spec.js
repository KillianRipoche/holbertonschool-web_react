import { render, screen } from '@testing-library/react';
import BodySection from './BodySection';

describe('BodySection component', () => {
  test('renders heading with title prop', () => {
    render(<BodySection title="test title"><p>test</p></BodySection>);
    expect(screen.getByRole('heading', { name: /test title/i })).toBeInTheDocument();
  });

  test('renders children passed to it', () => {
    render(<BodySection title="test"><p>child paragraph</p></BodySection>);
    expect(screen.getByText('child paragraph')).toBeInTheDocument();
  });
});
