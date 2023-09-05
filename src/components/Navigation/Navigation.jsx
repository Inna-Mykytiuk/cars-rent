import {
  Nav,
  NavList,
  Link,
  HomeIcon,
  NavListItem,
  GoBAckLink,
  GoBackIcon,
} from './Navigation.styled';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <Nav>
      <NavList>
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
        {(location.pathname === '/catalog' || location.pathname === '/favorites') && (
          <>
          <GoBAckLink>
            <Link to="/">
              <GoBackIcon />
            </Link>
          </GoBAckLink>
        </>
          )}
      </NavList>
    </Nav>
  );
};

export default Navigation;
