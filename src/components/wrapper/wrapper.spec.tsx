import { render } from '@testing-library/react';

import Wrapper from './wrapper';

describe('Wrapper', () => {
  it('should render successfully', () => {
    const { baseElement, getByText } = render(
      <Wrapper>
        <span>test</span>
      </Wrapper>
    );
    expect(baseElement).toBeTruthy();
    expect(getByText('test')).toBeTruthy();
  });
});
