import CatalogPage from '@/pages/Catalog';
import CarPage from '@/pages/Car';
import Error404Page from '@/pages/Error404';

export default [
  { name: 'car', path: '/car/:id([0-9]+)', component: CarPage, exact: true },
  { name: 'sell', path: '/sell', component: Error404Page, exact: true },
  { name: 'my-orders', path: '/my-orders', component: Error404Page, exact: true },
  { name: 'catalog', path: '/:page([1-9][0-9]*)?', component: CatalogPage, exact: true },
  { name: '404', component: Error404Page },
];
