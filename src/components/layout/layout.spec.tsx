import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Layout from './layout';

const renderComponent = async (routerEntries = ['/']) =>
  render(
    <MemoryRouter initialEntries={routerEntries}>
      <Layout />
    </MemoryRouter>
  );

describe('Layout', () => {
  it('should render successfully', () => {
    renderComponent();

    expect(screen.getByTestId('layout-box')).toBeTruthy();
  });
});
