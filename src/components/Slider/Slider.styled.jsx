import styled from '@emotion/styled';

export const SlideContainer = styled.div`
display: none;
  position: relative;
  overflow: hidden;
  height: 20vw;
  padding: 0;
  border-radius: 14px;
  @media (min-width: 768px) {
    display: block;

  }
  @media (min-width: 1440px) {
    display: block;
  }
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0;
  position: absolute;
  transition: all 0.8s ease-in-out;
  border-radius: 14px;

  &[data-active="true"] {
    opacity: 1;
  }
`;

export const SlideText = styled.div`
  position: absolute;
    background: rgba(0, 0, 0, 0.6);
    top: 10px;
    padding: 5px;
    right: 10px;
    text-transform: uppercase;
    color: white;
    font-weight: bold;
`;

export const RightArrow = styled.div`
  bottom: 20px;
  right: 20px;
  position: absolute;
  z-index: 200;
  transition: all 0.2s ease-in-out;
  color: rgba(160, 192, 255, 0.8);
  cursor: pointer;

  &:hover {
    color: rgba(160, 192, 255, 0.5);
    transform: scale(1.1);
  }

`;

export const LeftArrow = styled.div`
  bottom: 20px;
  left: 20px;
  position: absolute;
  z-index: 200;
  transition: all 0.2s ease-in-out;
  color: rgba(160, 192, 255, 1);
  cursor: pointer;

  &:hover {
    color: rgba(160, 192, 255, 0.5);
    transform: scale(1.1);
  }
`;

