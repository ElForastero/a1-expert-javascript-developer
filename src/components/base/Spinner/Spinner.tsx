import React from 'react';
import c from 'classnames';
import s from './Spinner.module.css';

type Props = {
  size?: 'sm' | 'md';
};

export const Spinner: React.FC<Props> = ({ size = 'md' }) => {
  return (
    <div className={c(s.ldsRing, s[size])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
