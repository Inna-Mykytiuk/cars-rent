import styled from '@emotion/styled';

export const ButtonFollows = styled.button`
  width: 200px;
  padding: 12px 0;
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
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  margin-top: 28px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #0b44cd;
  }
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
  /* text-transform: uppercase; */
  color: #99bfc8;
  text-shadow: 2px 2px 5px #000000;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #fff;
  }
`;
