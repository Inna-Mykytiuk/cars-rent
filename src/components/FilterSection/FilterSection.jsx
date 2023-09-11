import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { LoadMoreBtn } from 'components/Buttons/Buttons';
import NoCars from 'components/NoFollowers/NoCars';
import CarList from 'components/ListCards/ListCards';
import Loader from 'components/Loader/Loader';
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
  // eslint-disable-next-line no-unused-vars
  const [showNoCarsMessage, setShowNoCarsMessage] = useState(false); //

  useEffect(() => {
    setFilteredCars(data);
  }, [data]);

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

  const minPrice = 30;
  const maxPrice = 500;
  const step = 10;
  const priceOptions = createArrayWithStep(maxPrice, step)
    .filter(item => item >= minPrice)
    .map(item => ({ label: item, value: item }));

  const search = () => {
    setShowNoCarsMessage(false);
    const isBrandValid = model => /^[a-zA-Z\s]+$/i.test(model);
    let arr = data;

    if (model !== '') {
      if (!isBrandValid(model)) {
        toast.error('Car brand should contain only EN letters !');
        return;
      }
      if (
        !modelOptions.find(
          option => option.label.toLowerCase() === model.toLowerCase()
        )
      ) {
        toast.error(
          `There is no car brand "${model}" in the list with this params!`
        );
        return;
      }

      arr = arr.filter(
        ({ make }) => make.toLowerCase() === model.toLowerCase()
      );
    }

    if (price !== '') {
      if (Number(price) < minPrice) {
        toast.warn(`Price cannot be less than ${minPrice}!`);
        return;
      } else if (Number(price) > maxPrice) {
        toast.warn(`Price cannot be greater than ${maxPrice}!`);
        return;
      }
      arr = arr
        .filter(
          ({ rentalPrice }) => Number(rentalPrice.substr(1)) <= Number(price)
        )
        .sort((a, b) => a.rentalPrice - b.rentalPrice);
    }

    if (startMiles === '' && endMiles !== '')
      arr = arr.filter(({ mileage }) => mileage <= endMiles);

    if (startMiles !== '' && endMiles === '')
      arr = arr.filter(({ mileage }) => mileage >= startMiles);

    if (startMiles > endMiles && endMiles !== '') {
      toast.error('Mileage is incorrect!');
      return;
    }

    if (startMiles !== '' && endMiles !== '') {
      const startMilesInt = parseInt(startMiles, 10);
      const endMilesInt = parseInt(endMiles, 10);
      if (!Number.isInteger(startMilesInt) || !Number.isInteger(endMilesInt)) {
        toast.error(
          'Mileage must be an integer without decimals, in the range from 1000 to 6620!'
        );
        return;
      }
      if (startMilesInt < 1000 || endMilesInt > 6620) {
        toast.error('Mileage should be in the range of 1000 to 6620!');
        return;
      }
      arr = arr.filter(
        ({ mileage }) => mileage >= startMiles && mileage <= endMiles
      );
    }
    arr.sort((a, b) => {
      const priceA = Number(a.rentalPrice.substr(1));
      const priceB = Number(b.rentalPrice.substr(1));

      if (priceA === priceB) {
        return a.mileage - b.mileage;
      }

      return priceA - priceB;
    });

    setFilteredCars(arr);
    if (model !== '' || price !== '' || startMiles !== '' || endMiles !== '') {
      if (filteredCars.length === 0) {
        setShowNoCarsMessage(true);
        toast.info('No cars matching your criteria found.');
      }
    }
    return arr;
  };

  const reset = () => {
    setModel('');
    setPrice('');
    setStartMiles('');
    setEndMiles('');
    setFilteredCars(data);
    setShowNoCarsMessage(false);
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
        const startMilesInt = parseInt(startMiles, 10);
        const endMilesInt = parseInt(endMiles, 10);

        if (
          !Number.isInteger(startMilesInt) ||
          !Number.isInteger(endMilesInt)
        ) {
          toast.error(
            'Mileage must be an integer without decimals, in the range from 1000 to 6620!'
          );
          return;
        }

        if (startMilesInt < 1000 || endMilesInt > 6620) {
          toast.error('Mileage should be in the range of 1000 to 6620!');
          return;
        }

        search();
      }
    }
  };

  if (!data) return <Loader />;
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
        <NoCars />
      )}
    </FilterSectionContainer>
  );
};
