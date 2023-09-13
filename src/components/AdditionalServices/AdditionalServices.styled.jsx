import styled from "@emotion/styled/macro";

export const ServicesSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  padding: 10px 0;
  background: #657396;

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 5px, rgba(0, 0, 0, 0.1) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;

`;

export const ServicesImg = styled.img`
  display: block;
  margin: 0 auto;
  padding: 0;

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


export const Face1 = styled.div`
  position: relative;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(0);
  transition: 3.5s;
  height: 150px;
`;

export const Face2 = styled.div`
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  transform: translateY(-150px);
  transition: 3.5s;
  height: 150px;
`;
export const Content = styled.div`
  opacity: 0.2;
  transition: 0.5s;
`;

export const Card = styled.div`
  position: relative;
  cursor: pointer;
  width: 150px;
  height: 150px;
  transition: 0.5s;
  background: #333;
  transform: translateY(0);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${Content} {
    opacity: 0.2;
    transition: 3.5s;
  }


  &:hover {
    ${Face1} {
      background: #ff0057;
      transform: translateY(-75px);
      transition: 3.5s;

      ${Content} {
        opacity: 1;
      }
    }

    ${Face2} {
      transform: translateY(-75px);
      transition: 3.5s;
    }
  }
`;


export const Image = styled.img`
  max-width: 100px;
`;

export const Title = styled.h3`
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5em;
`;

export const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`;









