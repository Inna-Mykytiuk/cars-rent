import { ButtonFollows, BtnFilter, RentalButton } from "./Buttons.styled";

export const LoadMoreBtn = ({ onClick }) => (
  <ButtonFollows
    type="button"
    onClick={onClick}
  >
    Load more
  </ButtonFollows>
);

export const ButtonFilter = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <BtnFilter type={type} {...otherProps}>
      {children}
    </BtnFilter>
  );
};

export const RentalBtn = ({width}) => {
  return(
    <RentalButton href="tel:+380730000000" width={width}>Rental car</RentalButton>
  )
}
