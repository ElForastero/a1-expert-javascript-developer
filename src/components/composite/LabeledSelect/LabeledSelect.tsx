import React from 'react';
import Box from '@/components/base/Box';
import Label from '@/components/base/Label';
import { Select, Props as SelectProps } from '@/components/base/Select';
import useRandomID from '@/hooks/useRandomID';

export type Props = SelectProps & {
  label: string;
};

export const LabeledSelect: React.FC<Props> = ({ label, ...selectProps }) => {
  const id = useRandomID();

  return (
    <Box>
      <Box mb={1}>
        <Label htmlFor={id}>{label}</Label>
      </Box>
      <Select {...selectProps} id={id} />
    </Box>
  );
};
