import { useDispatch, useSelector } from 'react-redux';
import {
  minusToFavoriteList,
  plusToFavoriteList,
} from 'redux/favoriteSlice/slice';

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
}) => {
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.favorite);
  const followStatus = favorite.includes(id);
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
        <IconBtn>
          <HeartIcon />
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
        <LearnMoreBtn>Learn more</LearnMoreBtn>
        <button
          onClick={!followStatus ? incrementFavorite : decrementFavorite}
          type="button"
        >
          {!followStatus ? 'add' : 'almost added'}
        </button>
      </InfoWrapper>
    </Item>
  );
};

export default Card;
