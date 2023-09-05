import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
import { MainContainer } from './Layout.styled';

import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
    <Header />
      <Container>
      <MainContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </Container>
    </>
  );
};

export default Layout;
