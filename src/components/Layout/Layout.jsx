import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
