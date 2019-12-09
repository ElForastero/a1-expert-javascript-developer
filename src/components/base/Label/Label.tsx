import React from 'react';
import { container } from './Label.module.css';

export const Label: React.FC<React.HTMLProps<HTMLLabelElement>> = ({ children, htmlFor }) => (
  <label className={container} htmlFor={htmlFor}>
    {children}
  </label>
);
