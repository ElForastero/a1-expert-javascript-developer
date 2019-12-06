import { generatePath } from 'react-router-dom';
import config from '@/config/routes';

type RouterParams = {
  [key: string]: string | number | boolean | undefined;
};

/**
 * Generate route URL passing in the route name and its params.
 */
export default (name: string, params?: RouterParams) => {
  const route = config.find(({ name: routeName }) => name === routeName);

  if (!route || !route.path) {
    throw new Error(`Route "${name}" doesn't exist`);
  }

  return generatePath(route.path, params);
};
