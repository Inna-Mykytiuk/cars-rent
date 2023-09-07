import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useGetCarsQuery } from 'redux/usersSlice/slice';

const Home = lazy(() => import('pages/Home'));
const Catalogue = lazy(() => import('pages/Catalogue'));
const Favorites = lazy(() => import('pages/Favorites'));

export const App = () => {
  const { data } = useGetCarsQuery();
  if (!data) return;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalogue data={data} />} />
        <Route path="/favorites" element={<Favorites data={data} />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
