import React, { MouseEventHandler } from 'react';
import c from 'classnames';
import s from './Button.module.css';

type Props = {
  variant?: 'primary';
  size?: 'md';
  onClick?: MouseEventHandler;
};

const Button: React.FC<Props> = ({
  children,
  variant = 'primary',
  size = 'md',
  ...buttonProps
}) => (
  <button className={c(s.button, s[variant], s[size])} {...buttonProps}>
    {children}
  </button>
);

export default Button;
