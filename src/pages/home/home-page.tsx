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
import { useEffect, useState } from 'react';
import PeopleCardSimple from '../../components/people-card-simple/people-card-simple';
import { getPlanetId } from '../../state/planets.slice';
import { getStarshipId } from '../../state/starships.slice';
import {
  getHomeworldIds,
  getStarshipsIds,
} from '../../helpers/get-homeworlds-starships';
import ErrorResult from '../../components/error-result/error-result';
import SearchNavbar from '../../components/search-navbar/search-navbar';
import { People } from '../../types/types';

interface HomePageProps {
  testId?: string;
}

const HomePage = ({ testId = 'home-page' }: HomePageProps) => {
  const { people, loved, loading, error, searchable } = useAppSelector(
    state => state.people
  );
  const dispatch = useAppDispatch();

  const [searchByName, setSearchByName] = useState<string>('');
  const [searchByPlanet, setSearchByPlanet] = useState<string>('');
  const [searchByStarship, setSearchByStarship] = useState<string>('');
  const [peopleFound, setPeopleFound] = useState<People[]>([]);

  useEffect(() => {
    dispatch(getPeople({}))
      .unwrap()
      .then(peopleResult => {
        console.log('originalPromiseResult', peopleResult);

        const homeworldIds = getHomeworldIds(peopleResult.results);
        console.log('homeworldIds', homeworldIds);

        const starshipsIds = getStarshipsIds(peopleResult.results);
        console.log('starshipsIds', starshipsIds);

        const planetsDispatches = homeworldIds.map(planetId =>
          dispatch(getPlanetId(Number(planetId)))
        );
        const starshipsDispatches = starshipsIds.map(starshipIds =>
          dispatch(getStarshipId(Number(starshipIds)))
        );

        Promise.all([...planetsDispatches, ...starshipsDispatches]).then(
          values => {
            console.log('PROMISE ALL THEN', values);
            dispatch(makePeopleSearchable());
          }
        ); // TODO: dispatch set people error
      })
      .catch(rejectedValueOrSerializedError => {
        // TODO: dispatch set people error
        console.error('error', rejectedValueOrSerializedError);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (people.length > 0) {
      let found = people;
      if (searchByName.length > 0) {
        found = found.filter(person =>
          person.name.toLowerCase().includes(searchByName.toLowerCase())
        );
      }
      if (searchByPlanet.length > 0) {
        found = found.filter(person =>
          person.homeworldSearchable?.name
            .toLowerCase()
            .includes(searchByPlanet.toLowerCase())
        );
      }
      if (searchByStarship.length > 0) {
        found = found.map(person => ({
          ...person,
          starshipsNames: person.starshipsSearchable?.map(starship =>
            starship.name.toLowerCase()
          ),
        }));
        found = found.filter(person =>
          person.starshipsNames
            ?.join('')
            .includes(searchByStarship.toLowerCase())
        );
      }
      console.log('FOUND END', found);
      setPeopleFound(found);
    }
  }, [people, searchByName, searchByPlanet, searchByStarship]);

  return (
    <Box
      fontSize="xl"
      textAlign="center"
      data-test={`${testId}-container`}
      data-testid={`${testId}-container`}
    >
      <Grid minH="100vh" p={3}>
        {loading && !error ? (
          <CircularProgress color="green.300" isIndeterminate />
        ) : (
          <>
            {!loading && !error && searchable && (
              <SearchNavbar
                searchByName={searchByName}
                setSearchByName={setSearchByName}
                searchByPlanet={searchByPlanet}
                setSearchByPlanet={setSearchByPlanet}
                searchByStarship={searchByStarship}
                setSearchByStarship={setSearchByStarship}
              />
            )}
            <VStack spacing={8}>
              <SimpleGrid columns={[1, null, 4]} spacing="1px">
                {!loading && people && peopleFound ? (
                  <>
                    {peopleFound.map((person: People, index) => (
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

              <Text>{JSON.stringify(loved)}</Text>
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
          </>
        )}
        {!loading && error && <ErrorResult />}
      </Grid>
    </Box>
  );
};

export default HomePage;
