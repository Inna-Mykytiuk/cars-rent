import React from 'react'
import Container from 'components/Container/Container'
import { FooterSection, LogoWrapper, LogoText, FooterWrapper, ContactsTitle, ContactWrapper,ContactsText, TelIcon, EmailIcon } from './Footer.styled'
import carLogo from 'images/logo2.png';


const Footer = () => {
  return (
    <FooterSection>
    <Container>
      <FooterWrapper>
        <LogoWrapper>
        <img src={carLogo } alt="set Of Cars" width={320} height={120}/>
        <LogoText>CRS</LogoText>
        </LogoWrapper>
        <ContactWrapper>
        <ContactsTitle>Contact Us</ContactsTitle>
        <ContactsText><TelIcon/> +38 (097) 111 11 11</ContactsText>
        <ContactsText><EmailIcon/> info@CarRentalServise.com</ContactsText>
        </ContactWrapper>
      </FooterWrapper>
    </Container>

    </FooterSection>
  )
}

export default Footer
