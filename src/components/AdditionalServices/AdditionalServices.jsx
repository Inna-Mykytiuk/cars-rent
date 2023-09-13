import React from 'react';
import {
  ServicesSection,
  Card,
  Face1,
  Face2,
  Content,
  // Image,
  Title,
  Paragraph,
} from './AdditionalServices.styled';
import Container from 'components/Container/Container';
// import services from 'images/services.png';

const AdditionalServices = () => {
  return (
    <ServicesSection>
      <Container>
        {/* <ServicesImg src={services} alt="services"  width='300px'/> */}
        <Card>
          <Face1>
            <Content>
              {/* <Image
                src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"
                alt="Design"
              /> */}
              <Title>Design</Title>
            </Content>
          </Face1>
          <Face2>
            <Content>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident at.
              </Paragraph>
            </Content>
          </Face2>
        </Card>
      </Container>
    </ServicesSection>
  );
};

export default AdditionalServices;
