import { render, screen } from '@testing-library/react';
import StarshipsPage from './starships-page';

describe('StarshipsPage', () => {
  it('should render successfully', () => {
    render(<StarshipsPage />);
    expect(screen.getByTestId('starships-page-container')).toBeTruthy();
  });
});
