import * as React from 'react';
import { Box, Text, VStack, Grid } from '@chakra-ui/react';

interface StarshipsProps {
  testId?: string;
}

const StarshipsPage = ({ testId = 'starships-page' }: StarshipsProps) => {
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

export default StarshipsPage;
