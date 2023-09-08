import React from 'react';
import myImage from 'images/pngwing.com.png';
import {
  SectionContainer,
  NoFollowImg,
  NoFollowText,
} from './NoCars.styled';

const NoCars = () => {
  return (
    <SectionContainer>
      <NoFollowText>No cars avaible</NoFollowText>
      <NoFollowImg src={myImage} alt="Моя картинка" />
    </SectionContainer>
  );
};

export default NoCars;
