import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import NotFound from './not-found';

const renderComponent = async (routerEntries = ['/asd']) =>
  render(
    <MemoryRouter initialEntries={routerEntries}>
      <NotFound />
    </MemoryRouter>
  );

describe('NotFound', () => {
  it('should render successfully', () => {
    renderComponent();
    expect(screen.getByTestId('not-found-page-container')).toBeTruthy();
  });
});
