import { render, screen } from '@testing-library/react';
import PeoplePage from './people-page';

describe('PeoplePage', () => {
  it('should render successfully', () => {
    render(<PeoplePage />);
    expect(screen.getByTestId('people-page-container')).toBeTruthy();
  });
});
