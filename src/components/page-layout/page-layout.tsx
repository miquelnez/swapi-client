import { Container } from '@chakra-ui/react';
import { ReactNode } from 'react';

type PageProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
  testId?: string;
};

const PageLayout = ({ title, description, children, testId='page-layout' }: PageProps) => {
  return (
    <Container
      data-testid={`${testId}-container`} data-test={`${testId}-container`}
      display="flex"
      maxW="100%"
      minH={{ base: 'auto', md: '80vh', sm: '77vh'}}
      // px={{ base: 4, lg: 8 }}
      centerContent
    >
      {children}
    </Container>
  );
};

export default PageLayout;
