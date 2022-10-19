import * as React from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Text,
  VStack,
  Grid,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { getStarshipId } from '../../state/starships.slice';
import StarshipCard from '../../components/starship-card/starship-card';

interface StarshipsProps {
  testId?: string;
}

const StarshipsPage = ({ testId = 'starships-page' }: StarshipsProps) => {
  const dispatch = useAppDispatch();
  const { selectedStarship, loading } = useAppSelector(
    state => state.starships
  );

  const { id } = useParams();

  useEffect(() => {
    dispatch(getStarshipId(Number(id)));
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
          <BreadcrumbLink>Starships</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          {!loading && selectedStarship && (
            <BreadcrumbLink>{selectedStarship.name}</BreadcrumbLink>
          )}
        </BreadcrumbItem>
      </Breadcrumb>

      <Box
        fontSize="xl"
        textAlign="center"
        data-test={`${testId}-container`}
        data-testid={`${testId}-container`}
      >
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Text>STARSHIPS</Text>
            <Text>{JSON.stringify(selectedStarship)}</Text>
            {!loading && selectedStarship ? (
              <StarshipCard starship={selectedStarship}></StarshipCard>
            ) : (
              'Loading'
            )}
          </VStack>
        </Grid>
      </Box>
    </>
  );
};

export default StarshipsPage;
