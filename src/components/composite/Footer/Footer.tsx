import React from 'react';
import { container } from './Footer.module.css';
import { Box } from '@/components/base/Box';
import { Copyright } from '@/components/base/Copyright';

export const Footer: React.FC = () => (
  <Box
    as="footer"
    display="flex"
    alignItems="center"
    justifyContent="center"
    className={container}
    mt={3}
  >
    <Copyright data-testid="footer" />
  </Box>
);
