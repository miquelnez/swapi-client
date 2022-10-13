import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from './header';

const renderComponent = async (routerEntries = ['/']) =>
  render(
    <MemoryRouter initialEntries={routerEntries}>
      <Header />
    </MemoryRouter>
  );

describe('Header', () => {
  it('should render successfully', () => {
    renderComponent();

    expect(screen.getByTestId('header-box')).toBeTruthy();
  });
});
