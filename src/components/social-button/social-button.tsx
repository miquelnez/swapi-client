import { ReactNode } from 'react';
import { chakra, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';

interface SocialButtonProps {
  children: ReactNode;
  label: string;
  href: string;
  testId?: string;
}

const SocialButton = ({
  children,
  label,
  href,
  testId = 'social-button',
}: SocialButtonProps) => {
  return (
    <chakra.button
      data-testid={`${testId}-${label}`}
      data-test={`${testId}-${label}`}
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default SocialButton;
