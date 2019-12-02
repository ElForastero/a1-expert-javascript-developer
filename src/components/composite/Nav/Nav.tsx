import React from 'react';
import { container } from './Nav.module.css';

type Props = {
  children: React.ReactNode;
};

const Nav: React.FC<Props> = ({ children }) => <nav className={container}>{children}</nav>;

export default Nav;
