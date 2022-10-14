import * as React from 'react';
import { Box, Text, Link, VStack, Grid, SimpleGrid } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { getPeople } from '../../state/people.slice';
import { useEffect } from 'react';
import PeopleCard from '../../components/people-card/people-card';
import PeopleCardSimple from '../../components/people-card-simple/people-card-simple';

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
          <SimpleGrid columns={[1, null, 4]} spacing="1px">
            {!loading && people ? (
              <>
                {people.map((person: any, index) => (
                  // <PeopleCard
                  //   key={index}
                  //   person={person}
                  //   // onClickAdd={onClickAdd}
                  // ></PeopleCard>
                  <PeopleCardSimple
                    key={index}
                    person={person}
                    // onClickAdd={onClickAdd}
                  ></PeopleCardSimple>
                ))}
              </>
            ) : (
              'Loading'
            )}
          </SimpleGrid>

          <Text>{JSON.stringify(loading)}</Text>
          <Text>{JSON.stringify(people)}</Text>
          <Text>{JSON.stringify(selectedPeople)}</Text>
          <Link
            color="teal.500"
            fontSize="2xl"
            href="https://swapi.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Built with SWAPI
          </Link>
        </VStack>
      </Grid>
    </Box>
  );
};

export default HomePage;
