import { LoadMoreBtn } from 'components/Buttons/Buttons';
import CarList from 'components/ListCards/ListCards';
import React, { useEffect, useState } from 'react';
import {
  FilterSectionContainer,
  InputsBlock,
  ArrowDown,
  ArrowUp,
  ModelInput,
  Label,
  ModelInputBtn,
  ModelDropdown,
  ModelOptionListItem,
  ModelOptionList,
  InputBlock,
  PriceInput,
  PriceInputBtn,
  PriceDropdown,
  PriceOptionListItem,
  PriceOptionList,
  MileageInputWrapper,
  MileageInputLeft,
  MileageInputRight,
  SearchBtn,
} from './FilterSection.styled';

const cardsPerPage = 8;

export const FilterSection = ({ data }) => {
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [startMiles, setStartMiles] = useState('');
  const [endMiles, setEndMiles] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);
  const [page, setPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    30
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

    if (startMiles !== '' && endMiles !== '') {
      arr = arr.filter(
        ({ mileage }) => mileage >= startMiles && mileage <= endMiles
      );
    }
    arr.sort((a, b) => a.mileage - b.mileage);
    setFilteredCars(arr);
    return arr;
  };

  const reset = () => {
    setModel('');
    setPrice('');
    setStartMiles('');
    setEndMiles('');
    setFilteredCars(data);
  };

  const handleChangeModel = event => {
    setModel(event.target.value);
    setIsDropdownOpen(false);
    setPage(1);
  };
  const handleSelectModel = selectedModel => {
    setModel(selectedModel);
    setIsDropdownOpen(false);
  };

  const handleChangePrice = event => {
    setPrice(event.target.value);
    setPage(1);
  };
  const handleSelectPrice = selectedPrice => {
    setPrice(selectedPrice);
    setIsDropdownOpen(false);
  };

  const handleChangeStartMiles = event => {
    setStartMiles(event.target.value);
    setPage(1);
  };
  const handleChangeEndMiles = event => {
    setEndMiles(event.target.value);
    setPage(1);
  };

  const toggleDropdown = dropdownType => {
    if (isDropdownOpen === dropdownType) {
      setIsDropdownOpen(null);
    } else {
      setIsDropdownOpen(dropdownType);
    }
  };

  const handleInputKeyPress = (event, field) => {
    if (event.key === 'Enter') {
      if (field === 'model') {
        search();
      } else if (field === 'price') {
        search();
      } else if (field === 'mileage') {
        search();
      }
    }
  };

  if (!data) return <h4>wait...</h4>;
  const paginatedCars = filteredCars.slice(0, page * cardsPerPage);
  const getPage = () => setPage(page + 1);
  const totalPages = Math.ceil(filteredCars.length / cardsPerPage);

  return (
    <FilterSectionContainer>
      <InputsBlock>
        <InputBlock>
          <Label htmlFor="modelTitle">Car brand</Label>
          <ModelInput
            id="modelTitle"
            placeholder="Enter the text"
            onChange={handleChangeModel}
            value={model}
            onKeyDown={event => handleInputKeyPress(event, 'model')}
          />
          <ModelInputBtn type="button" onClick={() => toggleDropdown('model')}>
            {isDropdownOpen === 'model' ? <ArrowUp /> : <ArrowDown />}
          </ModelInputBtn>
          {isDropdownOpen === 'model' && (
            <ModelDropdown>
              <ModelOptionList>
                {modelOptions.map((option, idx) => (
                  <ModelOptionListItem
                    key={idx}
                    onClick={() => handleSelectModel(option.value)}
                  >
                    {option.label}
                  </ModelOptionListItem>
                ))}
              </ModelOptionList>
            </ModelDropdown>
          )}
        </InputBlock>
        <InputBlock>
          <Label htmlFor="modelTitle">Price/ 1 hour </Label>
          <PriceInput
            id="priceTitle"
            placeholder="To $"
            onChange={handleChangePrice}
            value={price}
            onKeyDown={event => handleInputKeyPress(event, 'price')}
          />
          <PriceInputBtn type="button" onClick={() => toggleDropdown('price')}>
            {isDropdownOpen === 'price' ? <ArrowUp /> : <ArrowDown />}
          </PriceInputBtn>
          {isDropdownOpen === 'price' && (
            <PriceDropdown>
              <PriceOptionList>
                {priceOptions.map((option, idx) => (
                  <PriceOptionListItem
                    key={idx}
                    onClick={() => handleSelectPrice(option.value)}
                  >
                    {option.label}
                  </PriceOptionListItem>
                ))}
              </PriceOptionList>
            </PriceDropdown>
          )}
        </InputBlock>
        <InputBlock>
          <Label htmlFor="mileageTitle">Сar mileage / km </Label>
          <MileageInputWrapper>
            <MileageInputLeft
              id="mileageTitle"
              placeholder="from"
              onChange={handleChangeStartMiles}
              value={startMiles}
              onKeyDown={event => handleInputKeyPress(event, 'mileage')}
            />
            <MileageInputRight
              type="number"
              value={endMiles}
              onChange={handleChangeEndMiles}
              placeholder="to"
              onKeyDown={event => handleInputKeyPress(event, 'mileage')}
            />
          </MileageInputWrapper>
        </InputBlock>
        <SearchBtn type="button" onClick={search}>
          Search
        </SearchBtn>
        <SearchBtn type="button" onClick={reset}>
          Reset
        </SearchBtn>
      </InputsBlock>
      <CarList cars={paginatedCars} />
      {filteredCars.length > 0 ? (
        totalPages !== page && <LoadMoreBtn onClick={getPage} />
      ) : (
        <h4>no cars</h4>
      )}
    </FilterSectionContainer>
  );
};
