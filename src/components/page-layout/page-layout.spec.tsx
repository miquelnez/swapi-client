import { render, screen } from '@testing-library/react';

import PageLayout from './page-layout';

describe('PageLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageLayout />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('page-layout-container')).toBeTruthy();
  });
});
