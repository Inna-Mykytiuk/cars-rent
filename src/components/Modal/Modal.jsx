import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { RentalBtn } from 'components/Buttons/Buttons';

import {
  ModalContainer,
  Backdrop,
  BtnClose,
  CloseIcon,
  CarImg,
  InfoWrapper,
  MainInfo,
  CarInfo,
  CarText,
  ModelBlue,
  SecondaryInfo,
  SecondaryCarText,
  ContentWrapper,
  Accessories,
  AccessoriesTitle,
  Descriprion,
  AccessoryList,
  AccessoryListItem,
  RentalTitle,
  RentalItem,
  RentalInfo,
  RentalBlock,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const toggleBodyOverflow = toggle => {
  if (toggle) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};

const Modal = ({
  onClose,
  model,
  make,
  id,
  img,
  year,
  address,
  rentalPrice,
  type,
  functionalities,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  rentalConditions,
  mileage,
}) => {
  useEffect(() => {
    toggleBodyOverflow(true);
    const onKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      toggleBodyOverflow(false);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  const onOverlay = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const addressParts = address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];
  const rentalConditionsSplitted = rentalConditions.split('\n', 3);
  const firstElement = rentalConditionsSplitted[0];
  const match = firstElement.match(/\d+/);
  const number = parseInt(match[0], 10);

  return createPortal(
    <Backdrop onClick={onOverlay} className="show">
      <ModalContainer className="show">
        <ContentWrapper>
          <BtnClose type="button" aria-label="close button" onClick={onClose}>
            <CloseIcon />
          </BtnClose>
          <CarImg src={img} alt={make} />
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
            </MainInfo>
            <SecondaryInfo>
              <SecondaryCarText>{city}</SecondaryCarText>
              <SecondaryCarText>{country}</SecondaryCarText>
              <SecondaryCarText>id: {id}</SecondaryCarText>
              <SecondaryCarText>Year: {year}</SecondaryCarText>
              <SecondaryCarText>Type: {type}</SecondaryCarText>
              <SecondaryCarText>
                Fuel Consumption: {fuelConsumption}
              </SecondaryCarText>
              <SecondaryCarText>Engine Size: {engineSize}</SecondaryCarText>
            </SecondaryInfo>
            <Descriprion>{description}</Descriprion>
            <Accessories>
              <AccessoriesTitle>
                Accessories and functionalities:
              </AccessoriesTitle>
              <AccessoryList>
                {accessories.map((accessory, index) => (
                  <AccessoryListItem key={index}>{accessory}</AccessoryListItem>
                ))}
                {functionalities.map((functionality, index) => (
                  <AccessoryListItem key={index}>
                    {functionality}
                  </AccessoryListItem>
                ))}
              </AccessoryList>
            </Accessories>
            <RentalBlock>
              <RentalTitle>Rental Conditions:</RentalTitle>
              <RentalInfo>
                <RentalItem>
                  Minimum age: <span>{number}</span>
                </RentalItem>
                <RentalItem>{rentalConditionsSplitted[1]}</RentalItem>
                <RentalItem>{rentalConditionsSplitted[2]}</RentalItem>
                <RentalItem>
                  Mileage: <span>{mileage.toLocaleString('en-EN')}</span>
                </RentalItem>
                <RentalItem>
                  Price: <span>{rentalPrice}</span>
                </RentalItem>
              </RentalInfo>
            </RentalBlock>
            <RentalBtn/>
          </InfoWrapper>
        </ContentWrapper>
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
