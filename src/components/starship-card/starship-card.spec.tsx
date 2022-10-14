/* eslint-disable jest/no-mocks-import */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StarshipCard from './starship-card';
import starship12 from '../../__mocks__/starship-12.json';
import { Starship } from '../../types/types';

describe('StarshipCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={['/']}>
        <StarshipCard starship={starship12 as unknown as Starship} />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('starship-card-container')).toBeTruthy();
  });
});
