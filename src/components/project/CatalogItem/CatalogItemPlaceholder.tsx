import React from 'react';
import { Box } from '@/components/base/Box';
import { Placeholder } from '@/components/base/Placeholder';
import s from './CatalogItem.module.css';

export const CatalogItemPlaceholder: React.FC = () => (
  <Box as="article" display="flex" className={s.container}>
    <Box display="inline-flex" mr={3}>
      <Placeholder width="86px" height="67px" />
    </Box>
    <Box flexGrow={1} display="flex" flexDirection="column">
      <div className={s.title}>
        <Placeholder line />
      </div>
      <div className={s.info}>
        <Placeholder line />
      </div>
      <div className={s.action}>
        <Placeholder line />
      </div>
    </Box>
  </Box>
);
