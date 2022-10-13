import * as React from 'react';
import { Box, Text, VStack, Grid } from '@chakra-ui/react';

interface PlanetsProps {
  testId?: string;
}

const PlanetsPage = ({ testId = 'planets-page' }: PlanetsProps) => {
  return (
    <Box
      fontSize="xl"
      textAlign="center"
      data-test={`${testId}-container`}
      data-testid={`${testId}-container`}
    >
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Text>PEOPLE</Text>
        </VStack>
      </Grid>
    </Box>
  );
};

export default PlanetsPage;
