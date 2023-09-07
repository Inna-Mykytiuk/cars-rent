import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import {
  minusToFavoriteList,
  plusToFavoriteList,
} from 'redux/favoriteSlice/slice';
import Modal from 'components/Modal/Modal';

import {
  CarImg,
  CarImgWrap,
  InfoWrapper,
  Item,
  MainInfo,
  CarInfo,
  CarText,
  ModelBlue,
  SecondaryInfo,
  SecondaryCarText,
  LearnMoreBtn,
  HeartIcon,
  IconBtn,
  HeartIconBlue,
} from './Card.styled';

const Card = ({
  model,
  make,
  id,
  img,
  year,
  address,
  rentalPrice,
  rentalCompany,
  type,
  functionalities,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  rentalConditions,
  mileage,
}) => {
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.favorite);
  const followStatus = favorite.includes(id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const incrementFavorite = () => {
    dispatch(plusToFavoriteList(id));
  };
  const decrementFavorite = () => {
    dispatch(minusToFavoriteList(id));
  };

  const addressParts = address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];

  const firstFunctionality = functionalities[0];

  return (
    <Item>
      <CarImgWrap>
        <CarImg src={img} alt={make} />
        <IconBtn
          onClick={!followStatus ? incrementFavorite : decrementFavorite}
          type="button"
        >
          {!followStatus ? <HeartIcon /> : <HeartIconBlue />}
        </IconBtn>
      </CarImgWrap>
      <InfoWrapper>
        <MainInfo>
          <CarInfo>
            <CarText>{make}</CarText>
            <ModelBlue>
              {model}
              <span style={{ color: 'black' }}>,</span>
            </ModelBlue>
            <CarText>{year}</CarText>
          </CarInfo>
          <CarText>{rentalPrice}</CarText>
        </MainInfo>
        <SecondaryInfo>
          <SecondaryCarText>{city}</SecondaryCarText>
          <SecondaryCarText>{country}</SecondaryCarText>
          <SecondaryCarText>{rentalCompany}</SecondaryCarText>
          <SecondaryCarText>{type}</SecondaryCarText>
          <SecondaryCarText>{make}</SecondaryCarText>
          <SecondaryCarText>{id}</SecondaryCarText>
          <SecondaryCarText>{firstFunctionality}</SecondaryCarText>
        </SecondaryInfo>
        <LearnMoreBtn onClick={openModal}>Learn more</LearnMoreBtn>
        {isModalOpen && (
          <Modal
            onClose={closeModal}
            key={id}
            model={model}
            make={make}
            year={year}
            rentalPrice={rentalPrice}
            address={address}
            rentalCompany={rentalCompany}
            functionalities={functionalities}
            id={id}
            type={type}
            img={img}
            fuelConsumption={fuelConsumption}
            engineSize={engineSize}
            description={description}
            accessories={accessories}
            rentalConditions={rentalConditions}
            mileage={mileage}
          />
        )}
      </InfoWrapper>
    </Item>
  );
};

export default Card;
