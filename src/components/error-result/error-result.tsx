import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

interface ErrorResultProps {
  testId?: string;
}

const ErrorResult = ({ testId = 'home-page' }: ErrorResultProps) => {
  return (
    <Box
      px={6}
      py={10}
      textAlign="center"
      data-test={`${testId}-container`}
      data-testid={`${testId}-container`}
    >
      <Box display="inline-block">
        <Flex
          align="center"
          justify="center"
          direction="column"
          w={'55px'}
          h={'55px'}
          textAlign="center"
          bg={'red.500'}
          rounded={'50px'}
        >
          <CloseIcon boxSize={'20px'} color={'white'} />
        </Flex>
      </Box>
      <Heading as="h2" mt={6} mb={2} size="xl">
        It has been an error
      </Heading>
      {/* <Text color={'gray.500'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text> */}
    </Box>
  );
};

export default ErrorResult;
