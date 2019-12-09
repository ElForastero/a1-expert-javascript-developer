import React from 'react';
import store, { AppThunk } from '@/store';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { CatalogFilters } from '@/components/project/CatalogFilters/CatalogFilters';
import '@testing-library/jest-dom/extend-expect';
import { updateData, updateLoading } from '@/store/colors';
import { updateData as updManData, updateLoading as updManLoading } from '@/store/manufacturers';
import { Model } from '@/types/Manufacturer';

afterEach(cleanup);

jest.mock('@/store/colors', () => ({
  __esModule: true,
  ...require.requireActual('@/store/colors'),

  fetchColors: (): AppThunk => async dispatch => {
    dispatch(updateData(['black']));
    dispatch(updateLoading(false));
  },
}));

jest.mock('@/store/manufacturers', () => ({
  __esModule: true,
  ...require.requireActual('@/store/manufacturers'),

  fetchManufacturers: (): AppThunk => async dispatch => {
    dispatch(
      updManData([
        {
          uuid: '2',
          name: 'BMW',
          models: [{ uuid: '2', name: 'Z8' }],
        },
      ])
    );
    dispatch(updManLoading(false));
  },
}));

type Params = {
  route?: string;
  history?: MemoryHistory;
};

// @ts-ignore
let currentLocation: Location = {
  pathname: '',
  search: '',
};

const renderApp = (
  ui: React.ReactElement,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) }: Params = {}
) => {
  const Wrapper: React.FC = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/">{children}</Route>
      </Router>
    </Provider>
  );

  return { ...render(ui, { wrapper: Wrapper }), history };
};

// ETA: 2 hours
describe('<NavFilter />', () => {
  it('should render "Color" <Label />', () => {
    const { getByText } = renderApp(<CatalogFilters />);
    expect(getByText('Color')).toBeDefined();
  });

  it('should render colors <Select />', () => {
    const { getByText } = renderApp(<CatalogFilters />);
    expect(getByText('All car colors')).toBeDefined();
  });

  it('should render "Manufacturer" <Label />', () => {
    const { getByText } = renderApp(<CatalogFilters />);
    expect(getByText('Manufacturer')).toBeDefined();
  });

  it('should render manufacturers <Select />', () => {
    const { getByText } = renderApp(<CatalogFilters />);
    expect(getByText('All manufacturers')).toBeDefined();
  });

  it('should render "Filter" <Button />', () => {
    const { getByText } = renderApp(<CatalogFilters />);
    expect(getByText('Filter')).toBeDefined();
  });

  it('should change address bar to selected values on "Filter" press', async () => {
    const { getByText, history } = renderApp(<CatalogFilters />);

    fireEvent.click(getByText('All car colors'));
    fireEvent.click(getByText(/black/i));
    fireEvent.click(getByText(/filter/i));

    fireEvent.click(getByText('All manufacturers'));
    fireEvent.click(getByText(/bmw/i));
    fireEvent.click(getByText(/filter/i));

    expect(history?.location.search).toEqual('?color=black&manufacturer=BMW');
  });
});
