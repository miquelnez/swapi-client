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
import ColorModeSwitcher from '../color-mode-switcher/color-mode-switcher';

type HeaderProps = {
  testId?: string;
};

const Header = ({ testId = 'header' }: HeaderProps) => {
  // const navigate = useNavigate();
  return (
    <Box
      px={4}
      bg={useColorModeValue('gray.100', 'gray.900')}
      data-test={`${testId}-box`}
      data-testid={`${testId}-box`}
    >
      <Flex align={'center'} justify={'space-between'} h={16}>
        <Link as={RouterLink} p={2} fontSize={'sm'} fontWeight={500} to="/">
          <Image objectFit="cover" alt="Logo" src="/assets/logoipsum-254.svg" />
        </Link>
        <Flex align={'center'}>
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
