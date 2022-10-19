import * as React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Grid,
  SimpleGrid,
  CircularProgress,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { getPeople, makePeopleSearchable } from '../../state/people.slice';
import { useEffect } from 'react';
import PeopleCardSimple from '../../components/people-card-simple/people-card-simple';
import { getPlanetId } from '../../state/planets.slice';
import { getStarshipId } from '../../state/starships.slice';
import {
  getHomeworldIds,
  getStarshipsIds,
} from '../../helpers/get-homeworlds-starships';
import ErrorResult from '../../components/error-result/error-result';
import SearchNavbar from '../../components/search-navbar/search-navbar';

interface HomePageProps {
  testId?: string;
}

const HomePage = ({ testId = 'home-page' }: HomePageProps) => {
  const { people, selectedPeople, loading, error, searchable } = useAppSelector(
    state => state.people
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPeople({}))
      .unwrap()
      .then(peopleResult => {
        console.log('originalPromiseResult', peopleResult);
        // const uniquePlanetsAndStarships = getHomeworldsAndStarships(
        //   peopleResult.results
        // );
        // console.log(uniquePlanetsAndStarships);

        const homeworldIds = getHomeworldIds(peopleResult.results);
        console.log('homeworldIds', homeworldIds);

        const starshipsIds = getStarshipsIds(peopleResult.results);
        console.log('starshipsIds', starshipsIds);

        // const dispatchPlanets = url => fetch(url, options).then(res => res.json());

        const planetsDispatches = homeworldIds.map(planetId =>
          dispatch(getPlanetId(Number(planetId)))
        );
        const starshipsDispatches = starshipsIds.map(starshipIds =>
          dispatch(getStarshipId(Number(starshipIds)))
        );

        Promise.all([...planetsDispatches, ...starshipsDispatches]).then(
          values => {
            console.log('PROMISE ALL FINISH', values);
            dispatch(makePeopleSearchable());
          }
        );
      })
      .catch(rejectedValueOrSerializedError => {
        console.error('error', rejectedValueOrSerializedError);
        // handle error here
      });
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
        {!loading && !error && searchable && <SearchNavbar />}
        {loading && !error ? (
          <CircularProgress color="green.300" isIndeterminate />
        ) : (
          <VStack spacing={8}>
            <SimpleGrid columns={[1, null, 4]} spacing="1px">
              {!loading && people ? (
                <>
                  {people.map((person: any, index) => (
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
        )}
        {!loading && error && <ErrorResult />}
      </Grid>
    </Box>
  );
};

export default HomePage;
