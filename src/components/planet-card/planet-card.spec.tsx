/* eslint-disable jest/no-mocks-import */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PlanetCard from './planet-card';
import planet1 from '../../__mocks__/planet-1.json';
import { Planet } from '../../types/types';

describe('PlanetCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={['/']}>
        <PlanetCard planet={planet1 as unknown as Planet} />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('planet-card-container')).toBeTruthy();
  });
});
