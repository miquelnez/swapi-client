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
import { getPlanetId } from '../../state/planets.slice';
import PlanetCard from '../../components/planet-card/planet-card';

interface PlanetsProps {
  testId?: string;
}

const PlanetsPage = ({ testId = 'planets-page' }: PlanetsProps) => {
  const dispatch = useAppDispatch();
  const { selectedPlanet, loading } = useAppSelector(state => state.planets);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getPlanetId(Number(id)));
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
          <BreadcrumbLink>Planets</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          {!loading && selectedPlanet && (
            <BreadcrumbLink>{selectedPlanet.name}</BreadcrumbLink>
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
            <Text>PLANETS</Text>
            {!loading && selectedPlanet ? (
              <PlanetCard planet={selectedPlanet}></PlanetCard>
            ) : (
              'Loading'
            )}
          </VStack>
        </Grid>
      </Box>
    </>
  );
};

export default PlanetsPage;
