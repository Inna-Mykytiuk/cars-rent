import styled from '@emotion/styled';

export const Wrapper = styled.main`
  height: 100vh;
`;
export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImg = styled.img`
  display: block;
  width: 90%;
  height: 90%;
  object-fit: cover;
  object-position: center center;
  @media (min-width: 768px) {
    width: 50%;
    height: 50%;
  }
  @media (min-width: 1440px) {
    width: 40%;
    height: 40%;
  }
`;

export const ErrorText = styled.p`
  background-color: transparent;
  border: none;
  padding: 28px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;
  color: #7b9ed9;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #1d1e26;
  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 28px;
  }
  @media (min-width: 1280px) {
    font-size: 28px;
  }
  @media (min-width: 1440px) {
    font-size: 38px;
  }
`;

export const ErrorTextErr = styled.p`
  background-color: transparent;
  border: none;
  padding: 28px;
  font-weight: 600;
  font-size: 102px;
  line-height: 1.2;
  color: #7b9ed9;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #1d1e26;
  padding: 0;
  margin: 0;
`;

export const HomeBtn = styled.button`
  padding: 10px 20px;
  color: #fff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  cursor: pointer;
  margin-top: 30px;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #0b44cd;
  }
  @media (min-width: 768px) {
    padding: 10px 20px;
  }
  @media (min-width: 1440px) {
    padding: 10px 30px;
  }
`;
