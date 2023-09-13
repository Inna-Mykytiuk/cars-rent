import React, { useState, useEffect } from 'react';
import { Slider } from 'components/Slider/Slider';
import HeroSection from 'components/HeroSection/HeroSection';
import Container from 'components/Container/Container';
import BtnToTop from 'components/Buttons/BtnToTop';
import {
  HomeSection,
  HomeTextMain,
  HomeTextSecondary,
  BlueCarImg,
  HomeWrapper,
  ContentWrapper,
} from './Home.styled';
import AdditionalServices from 'components/AdditionalServices/AdditionalServices';

import blueCar from 'images/blueCar.png';

const Home = ({ data }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <>
    <BtnToTop />
      <HeroSection />
      <AdditionalServices/>
      <HomeSection>
        <Container>
          <HomeWrapper>
            <BlueCarImg src={blueCar} alt="blue car" animated={isAnimated} />
            <ContentWrapper>
              <Slider cars={data} />
              <HomeTextMain>
                Unlock the Road to Adventure with Our Car Rental Service!
              </HomeTextMain>
              <HomeTextSecondary>
                The ultimate solution for hassle-free car rentals! With a wide
                range of vehicles to choose from, our user-friendly interface
                simplifies the process of renting a car.
              </HomeTextSecondary>
            </ContentWrapper>
          </HomeWrapper>
        </Container>
      </HomeSection>
    </>
  );
};

export default Home;
