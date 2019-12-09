import CatalogPage from '@/pages/Catalog';
import CarPage from '@/pages/Car';
import { NotImplemented } from './NotImplemented';

/**
 * Application routes configuration
 */
export default [
  {
    name: 'catalog',
    path: '/:page([1-9][0-9]*)?',
    component: CatalogPage,
    exact: true,
  },
  { name: 'car', path: '/car/:id([0-9]+)', component: CarPage, exact: true },
  { name: 'sell', path: '/sell', component: NotImplemented, exact: true },
  {
    name: 'my-orders',
    path: '/favorites',
    component: NotImplemented,
    exact: true,
  },
];
