import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import SocialButton from '../social-button/social-button';

type FooterProps = {
  testId?: string;
};

export default function Footer({ testId = 'footer' }: FooterProps) {
  return (
    <Box
      color={useColorModeValue('gray.700', 'gray.200')}
      bg={useColorModeValue('gray.50', 'gray.900')}
      data-test={`${testId}-box`}
      data-testid={`${testId}-box`}
    >
      <Container
        as={Stack}
        align={{ base: 'center', md: 'center' }}
        justify={{ base: 'center', md: 'space-between' }}
        direction={{ base: 'column', md: 'row' }}
        maxW={'12xl'}
        py={4}
        spacing={4}
      >
        <Text>© 2022 miquelnez</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
