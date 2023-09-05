import React from 'react';
import { CardsContainer, SectionContainer } from './ListCards.styled';

import Card from '../Card/Card';
import { List } from './ListCards.styled';

const CarList = ({cars}) => {

  return (
    <>
      <SectionContainer>
        <CardsContainer>
          <List>
        {cars.map(car => (
          <Card
          key={car.id}
          model={car.model}
          make={car.make}
          year={car.year}
          rentalPrice={car.rentalPrice}
          isFavorite={car.isFavorite}
          address={car.address}
          rentalCompany={car.rentalCompany}
          functionalities={car.functionalities}
          id={car.id}
          type={car.type}
          img={car?.img}
        />
        ))}
      </List>
        </CardsContainer>
      </SectionContainer>
    </>
  );
};

export default CarList;
