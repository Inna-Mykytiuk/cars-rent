import styled from '@emotion/styled';

export const HomePage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0 0;

  @media (min-width: 768px) {
    padding: 80px 0 0;
  }
  @media (min-width: 1440px) {
    padding: 100px 0px;
  }
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 320px;

  @media (min-width: 768px) {
    gap: 20px;
    width: 450px;
  }
  @media (min-width: 1440px) {
    gap: 30px;
    width: 600px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
`;

export const BlueCarImg = styled.img`
  display: block;

  max-width: 50%;

  @media (min-width: 768px) {
    display: block;
    width: 40%;
  }
  @media (min-width: 1440px) {
    display: block;
    width: 30%;
  }
`;

export const HomeTextMain = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 28px;
  line-height: 1.8;
  text-shadow: 1px 1px 2px #5c5757;

  @media (min-width: 768px) {
    font-size: 46px;
    line-height: 1.4;
  }
  @media (min-width: 1440px) {
    font-size: 56px;
    line-height: 1.2;
  }
`;

export const HomeTextSecondary = styled.h2`
  color: #8392b6;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.8;
  text-shadow: 1px 1px 2px #b7b0b0;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.8;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
    line-height: 1.8;
  }
`;
