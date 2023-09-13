import styled from '@emotion/styled';

import hero from 'images/carHero.jpg';

export const Hero = styled.div`
  display: flex;
  background: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.5)
    ),
    url(${hero});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 10px;
  width: 320px;
  height: 100%;
  margin-left: auto;
  align-items: center;

  @media (min-width: 768px) {
    gap: 20px;
    width: 620px;
    align-items: flex-start;
  }
  @media (min-width: 1440px) {
    gap: 30px;
    width: 800px;
    align-items: flex-start;
  }
`;

export const HeroTextMain = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 40px;
  line-height: 1.6;
  text-shadow: 1px 1px 2px #5c5757;

  @media (min-width: 768px) {
    font-size: 58px;
    line-height: 1.4;
  }
  @media (min-width: 1440px) {
    font-size: 86px;
    line-height: 1.2;
    font-weight: 900;
  }
`;

export const HeroTextSecondary = styled.h2`
  color: #b0bbd6;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.6;
  }
  @media (min-width: 1440px) {
    font-size: 22px;
    line-height: 1.6;
  }
`;

export const SpanText = styled.span`
  color: #5a7aaf;
`;
