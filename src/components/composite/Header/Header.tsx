import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '@/components/base/Logo';
import { Content } from '@/components/base/Layout';
import { Box } from '@/components/base/Box';
import { Nav } from '@/components/composite/Nav';
import { NavLink } from '@/components/base/Link';
import route from '@/libs/route';
import { header } from './Header.module.css';

export const Header = () => (
  <Box display="flex" as="header" alignItems="center" className={header}>
    <Content data-testid="header">
      <Box height="100%" display="flex" justifyContent="space-between" alignItems="center">
        <Link to={route('catalog')}>
          <Logo />
        </Link>
        <Nav>
          <NavLink to={route('catalog')}>Purchase</NavLink>
          <NavLink to={route('my-orders')}>My Orders</NavLink>
          <NavLink to={route('sell')}>Sell</NavLink>
        </Nav>
      </Box>
    </Content>
  </Box>
);
