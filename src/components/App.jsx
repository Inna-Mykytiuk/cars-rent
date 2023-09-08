import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useGetCarsQuery } from 'redux/usersSlice/slice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('pages/Home'));
const Catalogue = lazy(() => import('pages/Catalogue'));
const Favorites = lazy(() => import('pages/Favorites'));

export const App = () => {
  const { data } = useGetCarsQuery();
  if (!data) return;
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home data={data}/>} />
          <Route path="/catalog" element={<Catalogue data={data} />} />
          <Route path="/favorites" element={<Favorites data={data} />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
