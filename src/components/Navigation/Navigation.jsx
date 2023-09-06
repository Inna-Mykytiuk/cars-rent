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

  return (
    <Nav>
      <NavList>
      {(location.pathname === '/catalog' || location.pathname === '/favorites') && (
          <GoBAckLink>
            <Link to="/">
              <GoBackIcon />
            </Link>
          </GoBAckLink>

          )}
          <NavBlock>

        <NavListItem>
          <Link to="/catalog">Catalogue</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/favorites">Favorites</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/">
            <HomeIcon />
          </Link>
        </NavListItem>
          </NavBlock>


      </NavList>
    </Nav>
  );
};

export default Navigation;
