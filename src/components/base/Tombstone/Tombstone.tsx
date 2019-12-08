import React from 'react';
import c from 'classnames';
import s from './Tombstone.module.css';

type Props = {
  block?: boolean;
  line?: boolean;
  width?: string;
  height?: string;
};

const Tombstone: React.FC<Props> = ({ children, line = false, ...styles }) => {
  const Tag = line ? 'span' : 'div';

  return (
    <Tag className={c(s.tombstone, { [s.line]: line })} style={styles}>
      {children}
    </Tag>
  );
};

export default Tombstone;
