import { Link as RouterLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  Image,
  useColorModeValue,
  Link,
  HStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../color-mode-switcher/color-mode-switcher';

type HeaderProps = {
  testId?: string;
};

const Header = ({ testId = 'header' }: HeaderProps) => {
  // const navigate = useNavigate();
  return (
    <Box
      data-testid={`${testId}-box`}
      data-test={`${testId}-box`}
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={4}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Link p={2} as={RouterLink} to="/" fontSize={'sm'} fontWeight={500}>
          <Image objectFit="cover" src="/assets/logoipsum-254.svg" alt="Logo" />
        </Link>
        <Flex alignItems={'center'}>
          <HStack>
            <ColorModeSwitcher />
            <span>TODO: menu</span>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
