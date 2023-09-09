import { FilterSection } from 'components/FilterSection/FilterSection';
import React from 'react';
import { useSelector } from 'react-redux';

const Favorites = ({ data }) => {
  const favorite = useSelector(state => state.favorite);
  const favoriteCars = data.filter(car => favorite.includes(car.id));
  return (
    <>
      <FilterSection data={favoriteCars} />
    </>
  );
};

export default Favorites;
