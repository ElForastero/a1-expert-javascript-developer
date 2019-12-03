import React from 'react';
import c from 'classnames';
import s from './Button.module.css';

type Props = {
  variant?: 'primary';
  size?: 'md';
};

const Button: React.FC<Props> = ({ children, variant = 'primary', size = 'md' }) => (
  <button className={c(s.button, s[variant], s[size])}>{children}</button>
);

export default Button;
