import React from 'react';
import { NavLinkProps, NavLink as BaseLink } from 'react-router-dom';
import { link, active } from './NavLink.module.css';

const NavLink: React.FC<NavLinkProps> = ({ children, ...props }) => (
  <BaseLink className={link} activeClassName={active} {...props}>
    {children}
  </BaseLink>
);

export default NavLink;
