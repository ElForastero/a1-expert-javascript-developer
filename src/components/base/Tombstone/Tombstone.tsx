import React from 'react';
import c from 'classnames';
import s from './Tombstone.module.css';

type Props = {
  block?: boolean;
  line?: boolean;
  width?: string;
  height?: string;
};

const Tombstone: React.FC<Props> = ({ children, line = false, ...styles }) => (
  <div className={c(s.tombstone, { [s.line]: line })} style={styles}>
    {children}
  </div>
);

export default Tombstone;
