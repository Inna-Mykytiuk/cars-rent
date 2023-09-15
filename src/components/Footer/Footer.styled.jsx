import styled from '@emotion/styled/macro';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export const FooterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  background: #657396;

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 5px,
    rgba(0, 0, 0, 0.1) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
    margin-top: auto;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  @media (min-width: 768px) {
    gap: 200px;
    flex-direction: row;
  }
  @media (min-width: 1440px) {
    gap: 600px;
    flex-direction: row;
    align-items: stretch;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 250px;
  height: 120px;
  position: relative;
`;

export const LogoText = styled.p`
  position: absolute;
  font-family: 'Montserrat', sans-serif;
  top: -10px;
  right: -10px;

  font-size: 24px;
  line-height: 1.2;
  font-weight: 600;
  color: #7b9ed9;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #1d1e26;

  @media (min-width: 768px) {
    font-size: 30px;
    top: 15px;
    right: -30px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
    top: 15px;
    right: -30px;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContactsTitle = styled.p`
  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
  color: #fff;
  margin-bottom: 10px;

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #1d1e26;

  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const ContactsText = styled.did`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 1;
  font-weight: 400;
  color: #fff;
  opacity: 0.6;

  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const TelIcon = styled(BsFillTelephoneInboundFill)`
  width: 15px;
  height: 15px;
  margin: 0;
  padding: 10px;

  color: #fff;
  opacity: 0.6;
`;
export const EmailIcon = styled(MdEmail)`
  width: 15px;
  height: 15px;
  margin: 0;
  padding: 10px;

  color: #fff;
  opacity: 0.6;
`;
