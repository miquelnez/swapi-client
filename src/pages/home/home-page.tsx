import * as React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import { Logo } from '../../Logo';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { getPeople } from '../../state/people.slice';
import { useEffect } from 'react';

interface HomePageProps {
  testId?: string;
}

const HomePage = ({ testId = 'home-page' }: HomePageProps) => {
  const { people, selectedPeople, loading } = useAppSelector(
    state => state.people
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPeople({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <Text>{JSON.stringify(loading)}</Text>
          <Text>{JSON.stringify(people)}</Text>
          <Text>{JSON.stringify(selectedPeople)}</Text>
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
