import * as React from 'react';
// test.skip('TODO: es6 modules error', () => {
//   expect(true).toBeTruthy();
// });

import { render, screen } from '@testing-library/react';
import PeoplePage from './people-page';
import { MemoryRouter } from 'react-router-dom';

describe('PeoplePage', () => {
  it('should render successfully', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <PeoplePage />
      </MemoryRouter>
    );
    expect(screen.getByTestId('people-page-container')).toBeTruthy();
  });
});
