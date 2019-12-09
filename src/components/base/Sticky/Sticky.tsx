import React from 'react';
import { sticky } from './Sticky.module.css';

type Props = {
  top?: string;
  bottom?: string;
};

export const Sticky: React.FC<Props & React.HTMLProps<HTMLDivElement>> = ({
  children,
  top,
  bottom,
  ...props
}) => (
  <div className={sticky} style={{ top, bottom }} {...props}>
    {children}
  </div>
);
