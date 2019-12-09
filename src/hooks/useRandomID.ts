import { useMemo } from 'react';
import nanoid from 'nanoid';

/**
 * Returns a random string identifier that can be used for example in forms.
 */
export default () => {
  return useMemo(nanoid, []);
};
