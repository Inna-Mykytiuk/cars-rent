import {
  Nav,
  NavList,
  Link,
  HomeIcon,
  NavListItem,
  GoBackLink,
  GoBackIcon,
  NavBlock,
} from './Navigation.styled';
import { useLocation } from 'react-router-dom';

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
      </NavList>
    </Nav>
  );
};

export default Navigation;
