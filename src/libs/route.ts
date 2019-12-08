import { generatePath } from 'react-router-dom';
import queryString from 'query-string';
import config from '@/config/routes';

type RouterParams = {
  [key: string]: string | number | boolean | undefined;
};

type SearchParams = {
  [key: string]: any;
};

/**
 * Generate route URL passing in the route name and its params.
 */
export default (name: string, params?: RouterParams, searchParams?: SearchParams) => {
  const route = config.find(({ name: routeName }) => name === routeName);

  if (!route || !route.path) {
    throw new Error(`Route "${name}" doesn't exist`);
  }

  let query = null;
  if (searchParams !== undefined) {
    query = queryString.stringify(searchParams);
  }

  const path = generatePath(route.path, params);

  if (query !== null) {
    return `${path}?${query}`;
  }

  return path;
};
