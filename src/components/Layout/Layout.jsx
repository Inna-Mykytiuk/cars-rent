import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
// import { MainContainer } from './Layout.styled';

import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
    <Header />

      {/* <MainContainer> */}
      <main>
      <Suspense fallback={<Loader />}>
      <Container>
          <Outlet />
      </Container>
        </Suspense>
      </main>

      {/* </MainContainer> */}

    </>
  );
};

export default Layout;
