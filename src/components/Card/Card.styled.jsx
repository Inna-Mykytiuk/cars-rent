import styled from '@emotion/styled';
import { HiOutlineHeart } from 'react-icons/hi';

export const Item = styled.li`
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  /* background-color: #fff; */
  /* box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23); */
  /* border-radius: 20px; */
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

export const CarInfo = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
`;

export const CarText = styled.div`
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
  /* justify-content: space-between; */
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
  /* border-color: rgba(18, 20, 23, 0.5); */
  padding-right: 4px;

  /* margin-right: 3px; */
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

export const IconBtn = styled.button`
  position: absolute;
  margin: 0;
  top: 14px;
  right: 14px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`

export const HeartIcon = styled(HiOutlineHeart)`
  display: block;
  color: rgb(255 255 255 / 80%);
  width: 18px;
  height: 18px;

`;
