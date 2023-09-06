import {
  Nav,
  NavList,
  Link,
  HomeIcon,
  NavListItem,
  GoBAckLink,
  GoBackIcon,
  NavBlock
} from './Navigation.styled';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const isCatalogOrFavoritePage = location.pathname === '/catalog' || location.pathname === '/favorites';

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
          <GoBAckLink>
            <Link to="/">
              <GoBackIcon />
            </Link>
          </GoBAckLink>
        )}

        {isCatalogOrFavoritePage ? null : (
          <div style={{ width: '20px', height: '20px', padding: '11px' }}></div>
        )}
      </NavList>
    </Nav>
  );
};

export default Navigation;

