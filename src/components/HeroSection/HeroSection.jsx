import React from 'react';
import {
  Hero,
  ContentWrapper,
  HeroTextMain,
  HeroTextSecondary,
} from './HeroSection.styled';
import Container from 'components/Container/Container';

const HeroSection = () => {
  return (
    <Hero>
    <Container>
    <ContentWrapper>
    <HeroTextMain>"Travel Beyond Boundaries with Our Wheels."</HeroTextMain>
      <HeroTextSecondary>
      Welcome to Car Rental Service! Our app is your gateway to unlocking the road to adventure with hassle-free car rentals. Whether you're planning a weekend getaway or a long road trip, we've got you covered.
      </HeroTextSecondary>
    </ContentWrapper>
    </Container>


    </Hero>
  );
};

export default HeroSection;
