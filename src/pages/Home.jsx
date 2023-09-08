import React, { useState, useEffect } from 'react';
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
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <HomeSection>
      <HomeWrapper>
        <BlueCarImg src={blueCar} alt="blue car" animated={isAnimated}/>
        <ContentWrapper>
          <HomeTextMain>
            Unlock the Road to Adventure with Our Car Rental Service!
          </HomeTextMain>
          <HomeTextSecondary>
            The ultimate solution for hassle-free car rentals! With a wide range
            of vehicles to choose from, our user-friendly interface simplifies
            the process of renting a car.
          </HomeTextSecondary>
        </ContentWrapper>
      </HomeWrapper>
    </HomeSection>
  );
};

export default Home;
