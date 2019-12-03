import React from 'react';
import { LinkProps, Link as BaseLink } from 'react-router-dom';
import { link } from './Link.module.css';

type Props = LinkProps & {
  invertColors?: boolean;
};

const Link: React.FC<Props> = ({ children, invertColors, ...props }) => (
  <BaseLink className={link} {...props}>
    {children}
  </BaseLink>
);

Link.defaultProps = {
  invertColors: false,
};

export default Link;
