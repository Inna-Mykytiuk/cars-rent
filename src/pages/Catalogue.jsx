import React from 'react';
import { FilterSection } from 'components/FilterSection/FilterSection';
import BtnToTop from 'components/Buttons/BtnToTop';
import Container from 'components/Container/Container';

const Catalogue = ({ data }) => {
  return (
    <>
      <BtnToTop />
      <Container>
      <FilterSection data={data} />
      </Container>

    </>
  );
};

export default Catalogue;
