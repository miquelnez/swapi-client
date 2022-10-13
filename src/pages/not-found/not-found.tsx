import {
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface NotFoundProps {
  testId?: string;
}

function NotFound({ testId = 'not-found-page' }: NotFoundProps) {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box
      px={6}
      py={10}
      textAlign="center"
      data-test={`${testId}-container`}
      data-testid={`${testId}-container`}
    >
      <Heading as="h2" display="inline-block" bgClip="text" size="2xl">
        <Text as={'span'} color={useColorModeValue('gray.800', 'white')}>
          404
        </Text>
      </Heading>
      <Text mt={3} mb={2} fontSize="18px">
        Page Not Found
      </Text>
      <Text mb={6} color={'gray.500'}>
        The page you're looking for does not seem to exist
      </Text>

      <Button
        color="white"
        colorScheme="teal"
        onClick={handleGoHome}
        variant="solid"
      >
        Go to Home
      </Button>
    </Box>
  );
}

export default NotFound;
