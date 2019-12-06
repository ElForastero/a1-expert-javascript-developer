import React from 'react';
import Box from '@/components/base/Box';
import { Link } from '@/components/base/Link';
import { container } from './Pagination.module.css';

export const Pagination = () => {
  return (
    <Box display="flex" className={container} justifyContent="center">
      <Link to="/">First</Link>
      <Link to="/">Previous</Link>
      <div>Page 2 of 10</div>
      <Link to="/">Next</Link>
      <Link to="/">Last</Link>
    </Box>
  );
};
