import React from 'react';
import { layout } from './Layout.module.css';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => <main className={layout}>{children}</main>;
