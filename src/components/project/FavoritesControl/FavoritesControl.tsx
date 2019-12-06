import React from 'react';
import { Backplate } from '@/components/base/Backplate';
import { Paragraph } from '@/components/base/Typography';
import Button from '@/components/base/Button';
import Box from '@/components/base/Box';

export const FavoritesControl: React.FC = () => (
  <Backplate>
    <Paragraph>
      If you like this car, click the button and save it in your collection of favourite items.
    </Paragraph>
    <Box display="flex" justifyContent="flex-end" mt={1}>
      <Button>Save</Button>
    </Box>
  </Backplate>
);
