import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';

import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
