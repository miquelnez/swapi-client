import { Container } from '@chakra-ui/react';
import { ReactNode } from 'react';

type PageProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
  testId?: string;
};

const PageLayout = ({
  title,
  description,
  children,
  testId = 'page-layout',
}: PageProps) => {
  return (
    <Container
      display="flex"
      maxW="100%"
      minH={{ base: 'auto', md: '80vh', sm: '77vh' }}
      centerContent
      data-test={`${testId}-container`}
      // px={{ base: 4, lg: 8 }}
      data-testid={`${testId}-container`}
    >
      {children}
    </Container>
  );
};

export default PageLayout;
