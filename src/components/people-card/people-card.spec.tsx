/* eslint-disable jest/no-mocks-import */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PeopleCard from './people-card';
import person1 from './../../__mocks__/people-1.json';
import { People } from '../../types/types';

describe('PeopleCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={['/']}>
        <PeopleCard person={person1 as unknown as People} />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('people-card-container')).toBeTruthy();
  });
});
