import { render, screen } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom component', () => {
  test('renders div with class bodySectionWithMargin', () => {
    const { container } = render(
      <BodySectionWithMarginBottom title="test">
        <p>test</p>
      </BodySectionWithMarginBottom>
    );
    const div = container.querySelector('.bodySectionWithMargin');
    expect(div).toBeInTheDocument();
  });

  test('renders BodySection component inside', () => {
    render(
      <BodySectionWithMarginBottom title="test title">
        <p>test</p>
      </BodySectionWithMarginBottom>
    );
    expect(screen.getByRole('heading', { name: /test title/i })).toBeInTheDocument();
  });
});
