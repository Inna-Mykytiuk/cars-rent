import React from 'react';

import {
  ServicesSection,
  ServiceCard,
  Face1,
  Face2,
  ServiceContent,
  // Image,
  Title,
  Paragraph,
  ServiceCardWrapper,
  ServiceImg
} from './AdditionalServices.styled';
import Container from 'components/Container/Container';
// import services from 'images/services.png';
// import services from '../helpers/services.json';
import towing from 'images/serv/towing.svg'
import fuel from 'images/serv/speed.svg'
import tire from 'images/serv/tires.svg'
import washing from 'images/serv/wash.svg'
import mechanic from 'images/serv/mechanic.svg'

const AdditionalServices = () => {
  return (
    <ServicesSection>
      <Container>
        <ServiceCardWrapper>

            <ServiceCard >
              <Face1>
                <ServiceContent>
                <ServiceImg src={fuel} alt='Fuel Delivery' width={50} height={50} fill="#FF0000"/>

                </ServiceContent>
              </Face1>
              <Face2>
                <ServiceContent>
                  <Title>Fuel Delivery</Title>
                  <Paragraph>Order a fuel delivery, and we'll supply the required amount of fuel directly to your vehicle.</Paragraph>
                </ServiceContent>
              </Face2>
            </ServiceCard>
            <ServiceCard >
              <Face1>
                <ServiceContent>
                <ServiceImg src={towing} alt='Towing'  width={50} height={50} />
                </ServiceContent>
              </Face1>
              <Face2>
                <ServiceContent>
                  <Title>Towing</Title>
                  <Paragraph>Our towing service is ready to transport your vehicle to the nearest service center.</Paragraph>
                </ServiceContent>
              </Face2>
            </ServiceCard>
            <ServiceCard >
              <Face1>
                <ServiceContent>
                <ServiceImg src={tire} alt='Tire Service'  width={50} height={50}/>
                </ServiceContent>
              </Face1>
              <Face2>
                <ServiceContent>
                  <Title>Tire Service</Title>
                  <Paragraph>Our professional technicians will come to your tire-related issues.</Paragraph>
                </ServiceContent>
              </Face2>
            </ServiceCard>
            <ServiceCard >
              <Face1>
                <ServiceContent>
                <ServiceImg src={washing} alt='Car Washing'  width={50} height={50}/>
                </ServiceContent>
              </Face1>
              <Face2>
                <ServiceContent>
                  <Title>Car Washing</Title>
                  <Paragraph>Our professional car washers will ensure your car is shining.</Paragraph>
                </ServiceContent>
              </Face2>
            </ServiceCard>
            <ServiceCard >
              <Face1>
                <ServiceContent>
                <ServiceImg src={mechanic} alt='Mobile Mechanic' width={50} height={50} />
                </ServiceContent>
              </Face1>
              <Face2>
                <ServiceContent>
                  <Title>Mobile Mechanic</Title>
                  <Paragraph>Our qualified mobile mechanics will fix the issue promptly.</Paragraph>
                </ServiceContent>
              </Face2>
            </ServiceCard>

        </ServiceCardWrapper>
      </Container>
    </ServicesSection>
  );
};

export default AdditionalServices;

