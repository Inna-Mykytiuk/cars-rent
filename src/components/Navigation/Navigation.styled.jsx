import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { BsFillCarFrontFill } from 'react-icons/bs';
import { FaArrowLeft } from 'react-icons/fa';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const NavList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const NavBlock = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 30px;
  }
  @media (min-width: 1440px) {
    gap: 30px;
  }
`;

export const NavListItem = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GoBackLink = styled(NavLink)`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  svg {
    fill: #8392b6;
  }

  &.active,
  &:hover,
  &:focus {
    color: #fff;

    svg {
      fill: white;
      border: 1px solid #fff;
      box-shadow: rgb(231 222 221) 0px 0px 15px;
    }
  }
`;

export const ButtonFilters = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  color: #fff;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-shadow: 2px 2px 5px #000000;
  &:hover {
    color: #ffffff;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  font-family: 'Montserrat', sans-serif;

  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
  color: #8392b6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #1d1e26;

  svg {
    fill: #8392b6;
  }

  &.active,
  &:hover,
  &:focus {
    color: #fff;

    svg {
      fill: white;
      border: 1px solid #fff;
      box-shadow: rgb(231 222 221) 0px 0px 15px;
    }
  }
`;

export const HomeIcon = styled(BsFillCarFrontFill)`
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 10px;

  color: #99bfc8;
  border-radius: 50%;
  border: 1px solid #99bfc8;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(231 222 221) 0px 0px 15px;
`;

export const GoBackIcon = styled(FaArrowLeft)`
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 10px;

  color: #99bfc8;
  border-radius: 50%;
  border: 1px solid #99bfc8;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(231 222 221) 0px 0px 15px;
`;
