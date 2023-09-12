import React from 'react';
import carSet from 'images/carsSet.png';
import {
  SectionContainer,
  NoFollowImg,
  NoFollowText,
} from './NoCars.styled';

const NoCars = () => {
  return (
    <SectionContainer>
      <NoFollowText>No cars available</NoFollowText>
      <NoFollowImg src={carSet} alt="set Of Cars" />
    </SectionContainer>
  );
};

export default NoCars;
