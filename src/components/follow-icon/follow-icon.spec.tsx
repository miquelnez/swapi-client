import { render } from '@testing-library/react';

import FollowIcon from './follow-icon';

describe('FollowIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FollowIcon />);
    expect(baseElement).toBeTruthy();
  });
});
