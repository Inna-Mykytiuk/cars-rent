import React from 'react';
import {
  HomeSection,
  HomeTextMain,
  HomeTextSecondary,
  BlueCarImg,
  HomeWrapper,
  ContentWrapper,
  // ImageWrapper
} from './Home.styled';

import blueCar from 'images/blueCar.png';

const Home = () => {
  return (
    <HomeSection>
      <HomeWrapper>

          <BlueCarImg src={blueCar} alt="blue car" />


        <ContentWrapper>
          <HomeTextMain>
          Unlock the Road to Adventure with Our Car Rental Service!
          </HomeTextMain>
          <HomeTextSecondary>
          The ultimate solution for hassle-free car rentals! With a wide range of vehicles to choose from, our user-friendly interface simplifies the process of renting a car.
          </HomeTextSecondary>
        </ContentWrapper>
      </HomeWrapper>
    </HomeSection>
  );
};

export default Home;
