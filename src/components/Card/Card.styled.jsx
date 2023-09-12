import styled from '@emotion/styled';
import { HiOutlineHeart } from 'react-icons/hi';
import { HiHeart } from 'react-icons/hi';

export const Item = styled.div`
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
`;

export const CarImgWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const CarImg = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  width: 274px;
  height: 268px;
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
  color: #872142;
  font-size: 16px;
`;

export const ButtonFollows = styled.button`
  width: 196px;
  padding: 16px 0px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  background-color: ${({ bgColor }) =>
    bgColor === false ? '#EBD8FF' : '#5CD3A8'};
  border: none;
  cursor: pointer;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
`;

export const SecondaryInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: rgba(18, 20, 23, 0.5);

  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  gap: 4px;
`;

export const SecondaryCarText = styled.div`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-right: 1px solid rgba(18, 20, 23, 0.2);
  padding-right: 4px;
`;

export const LearnMoreBtn = styled.button`
  width: 274px;
  padding: 12px 0;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  border-radius: 12px;
  background: #5a7aaf;
  border: none;
  cursor: pointer;
  outline: none;
  margin-top: 18px;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #445c84;
  }

  @media (min-width: 768px) {
    margin-top: 24px;
  }
  @media (min-width: 1440px) {
    margin-top: 28px;
  }
`;

export const IconBtn = styled.button`
  position: absolute;
  margin: 0;
  top: 14px;
  right: 14px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const HeartIcon = styled(HiOutlineHeart)`
  display: block;
  color: rgb(255 255 255 / 80%);
  width: 18px;
  height: 18px;
`;

export const HeartIconBlue = styled(HiHeart)`
  display: block;
  color: #3470ff;
  width: 18px;
  height: 18px;
`;
