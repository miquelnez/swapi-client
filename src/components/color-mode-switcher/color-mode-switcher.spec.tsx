import { render, screen } from '@testing-library/react';

import ColorModeSwitcher from './color-mode-switcher';

const renderComponent = async () => render(<ColorModeSwitcher />);

describe('ColorModeSwitcher', () => {
  renderComponent();
  it('should render successfully', () => {
    expect(screen.getByTestId('color-mode-switcher')).toBeTruthy();
  });
});
