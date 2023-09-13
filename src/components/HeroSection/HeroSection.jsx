import React from 'react';
import {
  Hero,
  ContentWrapper,
  HeroTextMain,
  HeroTextSecondary,
  SpanText
} from './HeroSection.styled';
import Container from 'components/Container/Container';
import { RentalBtn } from 'components/Buttons/Buttons';

const HeroSection = ({width}) => {
  return (
    <Hero>
    <Container>
    <ContentWrapper>
    <HeroTextMain>"Travel <SpanText>Beyond Boundaries</SpanText> with Our Wheels."</HeroTextMain>
      <HeroTextSecondary>
      Welcome to Car Rental Service! Our app is your gateway to unlocking the road to adventure with hassle-free car rentals. Whether you're planning a weekend getaway or a long road trip, we've got you covered.
      </HeroTextSecondary>
      <RentalBtn width="160px"/>
    </ContentWrapper>
    </Container>
    </Hero>
  );
};

export default HeroSection;
