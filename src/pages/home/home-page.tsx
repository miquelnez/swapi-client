import * as React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import { Logo } from '../../Logo';

interface HomePageProps {
  testId?: string;
}

const HomePage = ({ testId = 'home-page' }: HomePageProps) => {
  return (
    <Box
      fontSize="xl"
      textAlign="center"
      data-test={`${testId}-container`}
      data-testid={`${testId}-container`}
    >
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            fontSize="2xl"
            href="https://chakra-ui.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </Box>
  );
};

export default HomePage;
