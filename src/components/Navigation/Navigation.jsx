import {
  Nav,
  NavList,
  Link,
  HomeIcon,
  NavListItem,
  GoBackLink,
  GoBackIcon,
  NavBlock
} from './Navigation.styled';
import { useLocation } from 'react-router-dom';
// import logo from 'images/logo.png';

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
          <GoBackLink to="/">
              <GoBackIcon />
          </GoBackLink>
        )}

        {isCatalogOrFavoritePage ? null : (
          <div style={{ width: '20px', height: '20px', padding: '11px' }}></div>
        )}
        {/* <NavListItem>
            <Link to="/">
              <img src={logo} alt='logo'/>
            </Link>
          </NavListItem> */}
      </NavList>
    </Nav>
  );
};

export default Navigation;

