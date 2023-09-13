import styled from '@emotion/styled';
import { MdClose } from 'react-icons/md';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 24px;
  padding: 15px;
  max-width: 320px;
  z-index: 100;
  overflow-y: auto;
  max-height: 80vh;

  border-radius: 24px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  @media (min-width: 768px) {
    padding: 30px;
    max-width: 100%;
    max-height: 600px;
    overflow-y: scroll;
    top: 40%;
  }
  @media (max-width: 1080px) {
    top: 50%;
    padding: 30px;
    max-width: 100%;
    height: 600px;
    overflow-y: scroll;
  }
  @media (min-width: 1440px) {
    top: 50%;
    padding: 40px;
    overflow-y: hidden;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  color: black;
  top: -12px;
  right: 0px;
  background-color: transparent;
  width: 10px;
  height: 10px;
  border: none;
  cursor: pointer;
  @media (min-width: 768px) {
    top: -22px;
    right: -12px;
    width: 20px;
    height: 20px;
  }
  @media (min-width: 1440px) {
    top: -30px;
    right: -20px;
    width: 24px;
    height: 24px;
  }
`;

export const CloseIcon = styled(MdClose)`
  display: block;
  color: #121417;
  width: 14px;
  height: 14px;
  @media (min-width: 768px) {
    top: -22px;
    right: -12px;
    width: 20px;
    height: 20px;
  }
  @media (min-width: 1440px) {
    top: -30px;
    right: -20px;
    width: 24px;
    height: 24px;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;

  background-color: white;
  border-radius: 24px;

  @media (min-width: 768px) {
    width: 461px;
  }
  @media (min-width: 1440px) {
    width: 461px;
  }
`;

export const CarImg = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  width: 461px;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  align-items: center;
`;

export const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  margin-bottom: 8px;
  font-weight: 500;
  line-height: 24px;
`;

export const CarInfo = styled.ul`
  display: flex;
  width: 100%;
  gap: 5px;
`;

export const CarText = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #121417;
  font-size: 16px;
  line-height: 24px;
`;

export const ModelBlue = styled.div`
  color: #3470ff;
  font-size: 16px;
`;

export const SecondaryInfo = styled.div`
  display: flex;
  width: 300px;
  flex-wrap: wrap;
  align-items: center;
  color: rgba(18, 20, 23, 0.5);

  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  gap: 3px;
  margin-bottom: 14px;
`;

export const SecondaryCarText = styled.div`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-right: 1px solid rgba(18, 20, 23, 0.2);
  padding-right: 3px;
`;

export const Descriprion = styled.p`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const Accessories = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
`;

export const AccessoriesTitle = styled.p`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const AccessoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: rgba(18, 20, 23, 0.5);

  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  gap: 3px;
`;

export const AccessoryListItem = styled.li`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-right: 1px solid rgba(18, 20, 23, 0.2);
  padding-right: 3px;
`;

export const RentalBlock = styled.div`
  padding: 0;
  margin: 0;
`;

export const RentalTitle = styled.p`
  margin-bottom: 8px;
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const RentalInfo = styled.ul`
  width: 320px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1440px) {
    width: 100%;
  }
`;

export const RentalItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  & span {
    color: #3470ff;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -0.24px;
  }
`;


