import { FilterSection } from 'components/FilterSection/FilterSection';
import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'components/Container/Container';

const Favorites = ({ data }) => {
  const favorite = useSelector(state => state.favorite);
  const favoriteCars = data.filter(car => favorite.includes(car.id));
  return (
    <>
    <Container>
    <FilterSection data={favoriteCars} />
    </Container>

    </>
  );
};

export default Favorites;
