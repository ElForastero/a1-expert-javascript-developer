import React from 'react';
import Logo from '@/components/base/Logo';
import { Content } from '@/components/base/Layout';
import Nav from '@/components/composite/Nav';
import { NavLink } from '@/components/base/Link';
import { header } from './Header.module.css';

const Header = () => (
  <header className={header}>
    <Content>
      <Logo />
      <Nav>
        <NavLink to="/">Purchase</NavLink>
        <NavLink to="/">My Orders</NavLink>
        <NavLink to="/">Sell</NavLink>
      </Nav>
    </Content>
  </header>
);

export default Header;
