import React from 'react';
import { container } from './Backplate.module.css';

export const Backplate: React.FC<React.HTMLProps<HTMLDivElement>> = ({ children, ...props }) => (
  <div className={container} {...props}>
    {children}
  </div>
);
