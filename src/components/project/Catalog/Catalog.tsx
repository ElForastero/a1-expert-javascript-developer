import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { times } from 'ramda';
import { RootState } from '@/store';
import { fetchCars } from '@/store/cars';
import { CatalogItem, CatalogItemPlaceholder } from '@/components/project/CatalogItem';
import { Box } from '@/components/base/Box';
import { Title } from '@/components/base/Typography';
import { Pagination } from '@/components/composite/Pagination';
import { MileageSortingSelect } from '@/components/project/MileageSortingSelect';
import { Placeholder } from '@/components/base/Placeholder';
import { list, container } from './Catalog.module.css';

const itemsPerPage = 10;

export const Catalog: React.FC = () => {
  const { totalCount, loading } = useSelector((state: RootState) => state.cars);

  let showing = 0;
  if (totalCount !== null) {
    showing = totalCount > itemsPerPage ? itemsPerPage : totalCount;
  }

  return (
    <div className={container} data-testid="catalog-list">
      <Box display="flex" justifyContent="space-between">
        <Box width="100%">
          <Title bold>Available cars</Title>
          <Box mb={2} />
          <Title>
            {!loading && Number(totalCount) > 0 && `Showing ${showing} of ${totalCount} results`}
            {loading && <Placeholder line />}
          </Title>
        </Box>
        <Box width="250px">
          <MileageSortingSelect />
        </Box>
      </Box>
      <Pagination entity="cars" fetch={fetchCars} route="catalog">
        {({ renderPagination, data, loading }) => (
          <Fragment>
            <div className={list}>
              {loading && times(n => <CatalogItemPlaceholder key={n} />, 10)}
              {!loading &&
                data.map(({ stockNumber, ...data }) => (
                  <CatalogItem key={stockNumber} stockNumber={stockNumber} {...data} />
                ))}
            </div>
            {!loading && data.length > 0 && <Box mt={3}>{renderPagination()}</Box>}
            {!loading && data.length === 0 && (
              <Box mt={3}>
                <Title>
                  It looks like we don't have any cars <br />
                  matching your search criteria :(
                </Title>
              </Box>
            )}
          </Fragment>
        )}
      </Pagination>
    </div>
  );
};
