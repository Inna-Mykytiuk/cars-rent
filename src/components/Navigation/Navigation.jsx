import {
  Nav,
  NavList,
  Link,
  HomeIcon,
  NavListItem,
  GoBackLink,
  GoBackIcon,
  NavBlock,
  LogoWrapper,
  LogoLink,
  LogoText
} from './Navigation.styled';
import { useLocation } from 'react-router-dom';
import carLogo from 'images/logo2.png';

const Navigation = () => {
  const location = useLocation();
  const isCatalogOrFavoritePage =
    location.pathname === '/catalog' || location.pathname === '/favorites';

  return (
    <Nav>
      <NavList>
        <NavBlock>
          <NavListItem>
            <Link to="/">
              <HomeIcon />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link to="/catalog">Catalogue</Link>
          </NavListItem>
          <NavListItem>
            <Link to="/favorites">Favorites</Link>
          </NavListItem>
        </NavBlock>
        {isCatalogOrFavoritePage && (
          <GoBackLink to="/">
            <GoBackIcon />
          </GoBackLink>
        )}
        <LogoLink to="/">
        <LogoWrapper>
        <img src={carLogo } alt="set Of Cars" width={60} height={40}/>
        <LogoText>CRS</LogoText>
        </LogoWrapper>
        </LogoLink>

      </NavList>
    </Nav>
  );
};

export default Navigation;
