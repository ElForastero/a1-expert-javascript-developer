import { useMemo } from 'react';
import nanoid from 'nanoid';

export default () => {
  return useMemo(nanoid, []);
};
