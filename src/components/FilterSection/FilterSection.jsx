import { LoadMoreBtn } from 'components/Buttons/Buttons';
import CarList from 'components/ListCards/ListCards';
import React, { useEffect, useState } from 'react';
import { FilterSectionContainer } from './FilterSection.styled';

const cardsPerPage = 8;

export const FilterSection = ({ data }) => {
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [startMiles, setStartMiles] = useState('');
  const [endMiles, setEndMiles] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setFilteredCars(data);
  }, [data]);
  function findMaxNumber(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return Math.ceil(max / 10) * 10;
  }
  function createArrayWithStep(number, step) {
    const resultArray = [];
    for (let i = step; i <= number; i += step) {
      resultArray.push(i.toString());
    }
    return resultArray;
  }
  const uniqueMakes = new Set();

  const modelOptions = filteredCars
    .filter(item => {
      const make = item.make;
      if (!uniqueMakes.has(make)) {
        uniqueMakes.add(make);
        return true;
      }
      return false;
    })
    .map(item => ({ label: item.make, value: item.make }));
  const priceOptions = createArrayWithStep(
    findMaxNumber(
      filteredCars.map(({ rentalPrice }) => {
        return Number(rentalPrice.substr(1));
      })
    ),
    10
  ).map(item => ({ label: item, value: item }));

  const search = () => {
    let arr = data;
    if (model !== '') arr = arr.filter(({ make }) => make === model);
    if (price !== '')
      arr = arr.filter(
        ({ rentalPrice }) => Number(rentalPrice.substr(1)) <= Number(price)
      );
    if (startMiles === '' && endMiles !== '')
      arr = arr.filter(({ mileage }) => mileage <= endMiles);
    if (startMiles !== '' && endMiles === '')
      arr = arr.filter(({ mileage }) => mileage >= startMiles);
    if (startMiles > endMiles && endMiles !== '')
      alert('Пробіг вказаний невірно!');
    if (startMiles !== '' && endMiles !== '')
      arr = arr.filter(({ mileage }) => endMiles >= mileage >= startMiles);
    setFilteredCars(arr);
    return arr;
  };
  // const reset = () => {
  //   setModel('');
  //   setPrice('');
  //   setStartMiles('');
  //   setEndMiles('');
  //   setFilteredCars(data);
  // };

  const handleChangeModel = event => {
    setModel(event.target.value);
    setPage(1);
  };
  const handleChangePrice = event => {
    setPrice(event.target.value);
    setPage(1);
  };
  const handleChangeStartMiles = event => {
    setStartMiles(event.target.value);
    setPage(1);
  };
  const handleChangeEndMiles = event => {
    setEndMiles(event.target.value);
    setPage(1);
  };

  if (!data) return <h4>wait...</h4>;
  const paginatedCars = filteredCars.slice(0, page * cardsPerPage);
  const getPage = () => setPage(page + 1);
  const totalPages = Math.ceil(filteredCars.length / cardsPerPage);
  return (
    <FilterSectionContainer >
      <div style={{ display: 'flex' }}>
        <div style={{ padding: '0' }}>
          {' '}
          <label>
            Car brand{' '}
            <select
              placeholder="Enter the text"
              value={model}
              onChange={handleChangeModel}
            >
              {modelOptions.map((option, idx) => (
                <option key={idx} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div style={{ padding: '0' }}>
          <label>
            Price/ 1 hour{' '}
            <select
              placeholder="To $"
              value={price}
              onChange={handleChangePrice}
            >
              {priceOptions.map((option, idx) => (
                <option key={idx} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div style={{ padding: '0' }}>
          <label>
            Сar mileage / km{' '}
            <input
              type="number"
              value={startMiles}
              onChange={handleChangeStartMiles}
              placeholder="from"
            />
          </label>
          <input
            type="number"
            value={endMiles}
            onChange={handleChangeEndMiles}
            placeholder="to"
          />{' '}
        </div>
        {/* <div style={{ padding: '30px 40px' }}></div> */}
        <div style={{ padding: '0' }}>
          <button type="button" onClick={search}>
            Search
          </button>
        </div>
        {/* <div style={{ padding: '30px 40px' }}>
          <button type="button" onClick={reset}>
            Reset Filter
          </button>
        </div> */}
      </div>
      <CarList cars={paginatedCars} />
      {filteredCars.length > 0 ? (
        totalPages !== page && <LoadMoreBtn onClick={getPage} />
      ) : (
        <h4>no cars</h4>
      )}
    </FilterSectionContainer>
  );
};
