import React from 'react';
import { HomeContainer, HomeTextMain, HomeTextSecondary } from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <HomeTextMain>
        Welcome to TweetDeck Connect, allows cars to browse and interact with
        Tweets cards!
      </HomeTextMain>
      <HomeTextSecondary>
        This user-friendly interface enhances Tweets engagement and simplifies
        the process of managing your Tweets network.
      </HomeTextSecondary>
    </HomeContainer>
  );
};

export default Home;
