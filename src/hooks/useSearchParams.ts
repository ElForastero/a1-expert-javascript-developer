import { useMemo } from 'react';
import queryString from 'query-string';

/**
 * Return Get params as an object
 */
export default () => {
  return useMemo(() => {
    return queryString.parse(window.location.search);
  }, [window.location.search]);
};
