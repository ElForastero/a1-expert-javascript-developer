import CatalogPage from '@/pages/Catalog';
import CarPage from '@/pages/Car';
import Error404Page from '@/pages/Error404';

export default [
  { name: 'catalog', path: '/', component: CatalogPage, exact: true },
  { name: 'car', path: '/car/:identifier', component: CarPage, exact: true },
  { name: '404', component: Error404Page },
];
