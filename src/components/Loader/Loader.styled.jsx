import styled from '@emotion/styled';

export const LoaderContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  ${({ center }) =>
    center &&
    `
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `}
`;

export const Container = styled.div`
  width: 70%;
  height: 70%;
  margin-left: 15%;
  margin-top: 15%;
  position: relative;
  transform: rotate(-45deg);
`;

export const Rect = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(
    to right,
    #141562,
    #486fbc,
    #eab5a1,
    #8dd6ff,
    #4973c9,
    #d07ca7,
    #f4915e,
    #f5919e,
    #b46f89,
    #141562,
    #486fbc
  );
  background-position: 0% 50%;
  background-size: 1000% 1000%;
  overflow: hidden;
  animation: moveGradient 15s infinite;
  ${({ clipPath }) => `clip-path: ${clipPath};`}
  ${({ transition }) => `transition: ${transition};`}
`;
