import { render } from '@testing-library/react';
import { FaTwitter } from 'react-icons/fa';

import SocialButton from './social-button';

describe('SocialButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SocialButton label={'test'} href={'#'}>
        {' '}
        <FaTwitter />
      </SocialButton>
    );
    expect(baseElement).toBeTruthy();
  });
});
