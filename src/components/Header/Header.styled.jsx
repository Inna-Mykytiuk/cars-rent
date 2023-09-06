import styled from '@emotion/styled';

const smallDeviceMediaQuery = `@media (min-width: 768px)`;

export const AppBar = styled.header`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  backdrop-filter: blur(10px);
  background-color: #00466e1a;
  /* background-color: #fff; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 5px, rgba(0, 0, 0, 0.1) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;

  ${smallDeviceMediaQuery} {
    width: 100%;
  }

`;


