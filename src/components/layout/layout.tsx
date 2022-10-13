import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box as="main" data-testid="layout-box" data-test="layout-box">{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
