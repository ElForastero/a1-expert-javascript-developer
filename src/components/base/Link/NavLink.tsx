import React from 'react';
import { NavLinkProps, NavLink as BaseLink } from 'react-router-dom';
import { normal, active } from './NavLink.module.css';

const NavLink: React.FC<NavLinkProps> = ({ children, ...props }) => (
  <BaseLink className={normal} activeClassName={active} {...props}>
    {children}
  </BaseLink>
);

export default NavLink;
