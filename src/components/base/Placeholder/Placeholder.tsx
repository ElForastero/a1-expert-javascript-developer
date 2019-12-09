import React from 'react';
import { Box, Props as BoxProps } from '@/components/base/Box';
import c from 'classnames';
import s from './Placeholder.module.css';

type Props = BoxProps & {
  block?: boolean;
  line?: boolean;
};

export const Placeholder: React.FC<Props> = ({ children, line = false, ...styles }) => (
  <Box
    display={line ? 'inline-flex' : 'flex'}
    as={line ? 'span' : 'div'}
    className={c(s.tombstone, { [s.line]: line })}
    {...styles}
  >
    {children}
  </Box>
);
