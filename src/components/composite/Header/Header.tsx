import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/base/Logo';
import { Content } from '@/components/base/Layout';
import Box from '@/components/base/Box';
import Nav from '@/components/composite/Nav';
import { NavLink } from '@/components/base/Link';
import { header } from './Header.module.css';

const Header = () => (
  <Box display="flex" as="header" alignItems="center" className={header}>
    <Content>
      <Box height="100%" display="flex" justifyContent="space-between" alignItems="center">
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavLink to="/catalog">Purchase</NavLink>
          <NavLink to="/my-orders">My Orders</NavLink>
          <NavLink to="/sell">Sell</NavLink>
        </Nav>
      </Box>
    </Content>
  </Box>
);

export default Header;
