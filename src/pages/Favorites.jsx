import { FilterSection } from 'components/FilterSection/FilterSection';
import React from 'react'
import { useSelector } from 'react-redux';

const Favorites = ({ data }) => {
  const favorite = useSelector(state => state.favorite);
  const favriteCars = data.filter(car => favorite.includes(car.id))
  return (
    <div>
    <FilterSection data={favriteCars} />
    </div>
  )
}

export default Favorites;
