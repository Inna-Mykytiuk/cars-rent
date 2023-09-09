import React from 'react';
import { FilterSection } from 'components/FilterSection/FilterSection';
import BtnToTop from 'components/Buttons/BtnToTop';

const Catalogue = ({ data }) => {
  return (
    <>
      <BtnToTop />
      <FilterSection data={data} />
    </>
  );
};

export default Catalogue;
