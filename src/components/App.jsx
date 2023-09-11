import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useGetCarsQuery } from 'redux/usersSlice/slice';
import TostContainer from './helpers/TostContainer';
import Loader from './Loader/Loader';

const Home = lazy(() => import('pages/Home'));
const Catalogue = lazy(() => import('pages/Catalogue'));
const Favorites = lazy(() => import('pages/Favorites'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  const { data } = useGetCarsQuery();
  if (!data) return;
  return (
    <>
      <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home data={data} />} />
            <Route path="/catalog" element={<Catalogue data={data} />} />
            <Route path="/favorites" element={<Favorites data={data} />} />
          </Route>
          <Route path="*" element={<Suspense fallback={<Loader />}><NotFoundPage /></Suspense>} />

      </Routes>
      <TostContainer />
    </>
  );
};
