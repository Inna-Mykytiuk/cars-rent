import React from 'react';
import {
  Wrapper,
  SectionContainer,
  ErrorImg,
  HomeBtn,
  ErrorText,
  ErrorTextErr,
} from './NotFounPage.styled';
import { useNavigate } from 'react-router-dom';
import myImage from 'images/pngwing.com.png';
import Container from 'components/Container/Container';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <SectionContainer>
          <ErrorTextErr>404</ErrorTextErr>
          <ErrorText>Page not Found</ErrorText>
          <HomeBtn onClick={() => navigate('/')}>BackHome</HomeBtn>
          <ErrorImg src={myImage} alt="page404" />
        </SectionContainer>
      </Container>
    </Wrapper>
  );
};

export default NotFoundPage;
