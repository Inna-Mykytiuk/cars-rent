import styled from '@emotion/styled';

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NoFollowImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  @media (min-width: 768px) {
    width: 60%;
  height: 60%;
  }
  @media (min-width: 1440px) {
    width: 50%;
  height: 50%;
  }
`;

export const NoFollowText = styled.p`
  background-color: transparent;
  border: none;
  padding: 28px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: #7b9ed9;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px, rgba(0, 0, 0, 0.5) 1px 1px 1px;
    text-shadow: 2px 2px 5px #1d1e26;
  padding: 0;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 26px;
  }
  @media (min-width: 1440px) {
    font-size: 38px;
  }
`;
