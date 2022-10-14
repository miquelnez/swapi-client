import * as React from 'react';
import mockAxios from 'jest-mock-axios';
// test.skip('TODO: es6 modules error', () => {
//   expect(true).toBeTruthy();
// });

import { render, screen } from '@testing-library/react';
import PeoplePage from './people-page';
import { MemoryRouter } from 'react-router-dom';

describe('PeoplePage', () => {
  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });
  it('should render successfully', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <PeoplePage />
      </MemoryRouter>
    );
    expect(screen.getByTestId('people-page-container')).toBeTruthy();
  });
});
