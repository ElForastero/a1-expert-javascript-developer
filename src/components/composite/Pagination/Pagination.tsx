import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useSearchParams from '@/hooks/useSearchParams';
import { Car } from '@/types/Car';
import { AppThunk, PaginatableRoute, PaginatableType, RootState } from '@/store';
import route from '@/libs/route';
import { Box } from '@/components/base/Box';
import { Link } from '@/components/base/Link';
import { container } from './Pagination.module.css';

type ChildrenProps = {
  renderPagination: () => React.ReactNode;
  // @todo Infer the type
  data: Car[];
  loading: boolean;
};

type Props = {
  children: ({}: ChildrenProps) => React.ReactNode;
  fetch: ({ page }: { page: number }) => AppThunk;
  entity: PaginatableType;
  route: PaginatableRoute;
};

export const Pagination: React.FC<Props> = ({ children, fetch, entity, route: routeName }) => {
  const { page } = useParams();
  const params = useSearchParams();
  // @todo extend useParams to automatically cast params into needed types
  const intPage = parseInt(page ?? '1', 10);

  const dispatch = useDispatch();
  const { data, loading, pagesCount, totalCount } = useSelector(
    (state: RootState) => state[entity]
  );

  useEffect(() => {
    dispatch(fetch({ ...params, page: intPage }));
  }, [intPage, params]);

  const isFirstPage = intPage === 1;
  const isLastPage = intPage === pagesCount;

  const getRoute = (page: number) => route(routeName, { page }, params);

  const renderPagination = () => (
    <Box display="flex" className={container} justifyContent="center">
      <Link to={getRoute(1)} disabled={isFirstPage || loading}>
        First
      </Link>
      <Link to={getRoute(!isFirstPage ? intPage - 1 : 1)} disabled={isFirstPage || loading}>
        Previous
      </Link>
      <div>{!loading ? `Page ${intPage} of ${pagesCount}` : 'Loading...'}</div>
      <Link to={getRoute(!isLastPage ? intPage + 1 : pagesCount!)} disabled={isLastPage || loading}>
        Next
      </Link>
      <Link to={getRoute(pagesCount!)} disabled={isLastPage || loading}>
        Last
      </Link>
    </Box>
  );

  return <Fragment>{children({ renderPagination, data, loading })}</Fragment>;
};
