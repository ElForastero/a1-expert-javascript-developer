import React from 'react';
import { container } from './Nav.module.css';

type Props = {
  children: React.ReactNode;
};

export const Nav: React.FC<Props> = ({ children }) => (
  <nav className={container} data-testid="navigation">
    {children}
  </nav>
);
