import { render, screen } from '@testing-library/react';

import Footer from './footer';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('footer-box')).toBeTruthy();
  });
});
