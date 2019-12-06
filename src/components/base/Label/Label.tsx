import React, { LabelHTMLAttributes } from 'react';
import { container } from './Label.module.css';

const Label: React.FC<React.HTMLProps<HTMLLabelElement>> = ({ children, htmlFor }) => (
  <label className={container} htmlFor={htmlFor}>
    {children}
  </label>
);

export default Label;
