import styled from '@emotion/styled';

const smallDeviceMediaQuery = `@media (max-width: 768px)`;
const bigDeviceMediaQuery = '@media (max-width: 1440px)';

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;


  ${bigDeviceMediaQuery} {
    padding: 0 10px;
    max-width: 1440px;
  }
  ${smallDeviceMediaQuery} {
    padding: 0 10px;
    max-width: 420px;
  }
`;
