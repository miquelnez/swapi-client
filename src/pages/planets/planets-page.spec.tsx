import { render, screen } from '@testing-library/react';
import PlanetsPage from './planets-page';

describe('PlanetsPage', () => {
  it('should render successfully', () => {
    render(<PlanetsPage />);
    expect(screen.getByTestId('planets-page-container')).toBeTruthy();
  });
});
