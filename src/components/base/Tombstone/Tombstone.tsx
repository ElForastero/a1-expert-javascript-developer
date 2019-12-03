import React from 'react';
import c from 'classnames';
import s from './Tombstone.module.css';

type Props = {
  block?: boolean;
  line?: boolean;
};

const Tombstone: React.FC<Props> = ({ children }) => (
  <div className={c(s.tombstone)}>{children}</div>
);

export default Tombstone;
