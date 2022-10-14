import * as React from 'react';
import { useEffect } from 'react';
import {
  Box,
  Text,
  VStack,
  Grid,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { useParams, Link } from 'react-router-dom';
import { getPeopleId } from '../../state/people.slice';
import PeopleCard from '../../components/people-card/people-card';

interface PeopleProps {
  testId?: string;
}

const PeoplePage = ({ testId = 'people-page' }: PeopleProps) => {
  const dispatch = useAppDispatch();
  const { selectedPeople, loading } = useAppSelector(state => state.people);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getPeopleId(Number(id)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>People</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          {!loading && selectedPeople && (
            <BreadcrumbLink>{selectedPeople.name}</BreadcrumbLink>
          )}
        </BreadcrumbItem>
      </Breadcrumb>
      <Box
        fontSize="xl"
        textAlign="center"
        data-test={`${testId}-container`}
        data-testid={`${testId}-container`}
      >
        {/* <Text>{JSON.stringify(loading)}</Text>
        <Text>{JSON.stringify(selectedPeople)}</Text> */}
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Text>PEOPLE {id}</Text>
            {!loading && selectedPeople ? (
              <PeopleCard person={selectedPeople}></PeopleCard>
            ) : (
              'Loading'
            )}
          </VStack>
        </Grid>
      </Box>
    </>
  );
};

export default PeoplePage;
