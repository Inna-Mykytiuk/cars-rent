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
            Welcome to TweetDeck Connect, allows cars to browse and interact
            with Tweets cards!
          </HomeTextMain>
          <HomeTextSecondary>
            This user-friendly interface enhances Tweets engagement and
            simplifies the process of managing your Tweets network.
          </HomeTextSecondary>
        </ContentWrapper>
      </HomeWrapper>
    </HomeSection>
  );
};

export default Home;
