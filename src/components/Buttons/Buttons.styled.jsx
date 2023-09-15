import styled from '@emotion/styled';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';

export const TopButton = styled.div`
  position: fixed;
  bottom: 60px;
  right: 15px;
  color: #abcdef;
  transition: 250ms;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #8392b6;
  }

  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    bottom: 60px;
    right: 25px;
  }

  @media screen and (min-width: 1200px) {
    width: 60px;
    height: 60px;
    border-radius: 60px;
    bottom: 60px;
    right: 25px;
  }
`;

export const ToTopBtn = styled(FaRegArrowAltCircleUp)`
  /* position: absolute; */
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 40px;


  @media screen and (min-width: 450px) {
    font-size: 35px;
    display: flex;
  }

  @media screen and (min-width: 1200px) {
    font-size: 40px;
    display: flex;
  }
`;

export const ButtonFollows = styled.button`
  width: 200px;
  padding: 12px 0;
  color: #fff;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border-radius: 12px;
  background: #5a7aaf;
  border: none;
  cursor: pointer;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  margin-top: 28px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #445c84;
  }
`;

export const LearnMoreBtn = styled.button`
  width: 274px;
  padding: 12px 0;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  cursor: pointer;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  margin-top: 28px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #0b44cd;
  }
`;

export const BtnFilter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  padding: 5px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  color: #99bfc8;
  text-shadow: 2px 2px 5px #000000;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #fff;
  }
`;

export const RentalButton = styled.a`
  width: ${props => props.width || 'auto'};
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #5a7aaf;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  text-decoration: none;
  border: none;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #445c84;
  }
`;
