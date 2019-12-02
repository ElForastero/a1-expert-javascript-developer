import React from 'react';
import { LinkProps, Link as BaseLink } from 'react-router-dom';
import { link } from './Link.module.css';

const Link: React.FC<LinkProps> = ({ children, ...props }) => (
  <BaseLink className={link} {...props}>
    {children}
  </BaseLink>
);

export default Link;
