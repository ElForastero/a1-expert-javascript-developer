import React from 'react';
import CatalogPage from './Catalog';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import store, { AppThunk } from '@/store';
import { FetchCarsParams, updateData, updateLoading } from '@/store/cars';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';

afterEach(cleanup);

jest.mock('@/store/cars', () => ({
  __esModule: true,
  ...require.requireActual('@/store/cars'),

  fetchCars: (params: FetchCarsParams): AppThunk => async dispatch => {
    dispatch(
      updateData({
        data: [
          {
            stockNumber: 1,
            manufacturerName: 'Tesla',
            modelName: 'Model S',
            color: 'silver',
            mileage: { number: 20, unit: 'km' },
            fuelType: 'Petrol',
            pictureUrl: '/car.svg',
          },
        ],
        totalCount: 100,
        pagesCount: 10,
        loading: false,
        error: null,
      })
    );
    dispatch(updateLoading(false));
  },
}));

type RenderProps = {
  route?: string;
  history?: MemoryHistory;
};

const renderApp = (
  ui: React.ReactElement,
  { route = '/1', history = createMemoryHistory({ initialEntries: [route] }) }: RenderProps = {}
) => {
  const Wrapper: React.FC = ({ children }) => (
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <Switch>
          <Route exact path="/:page([1-9][0-9]*)?">
            {children}
          </Route>
          <Route path="/car/:id">Car view</Route>
        </Switch>
      </MemoryRouter>
    </Provider>
  );
  return {
    ...render(ui, { wrapper: Wrapper }),
    history,
  };
};

// ETA: 2-3 hours
describe('<Index />', () => {
  it('should not render Welcome!', () => {
    const { queryByText } = renderApp(<CatalogPage />);
    expect(queryByText('Welcome!')).toBeNull();
  });

  it('should render <Heading />', () => {
    const { getByTestId } = renderApp(<CatalogPage />);
    expect(getByTestId('header')).toBeDefined();
  });

  it('should render <Footer /> at the bottom', () => {
    const { getByTestId } = renderApp(<CatalogPage />);
    expect(getByTestId('footer')).toBeDefined();
  });

  it('should render <NavFilter />', () => {
    const { getByTestId } = renderApp(<CatalogPage />);
    expect(getByTestId('navigation')).toBeDefined();
  });

  it('should render sort <Select /> mileage', () => {
    const { getByText } = renderApp(<CatalogPage />);
    expect(getByText('Sort by')).toBeDefined();
  });

  it('should render "10 of 100 results"', () => {
    const { getByText } = renderApp(<CatalogPage />);
    expect(getByText('Showing 10 of 100 results')).toBeDefined();
  });

  it('should render <List /> of cars', () => {
    const { getByTestId } = renderApp(<CatalogPage />);
    expect(getByTestId('catalog-list')).toBeDefined();
  });

  it('should render cars manufacturer and model name', () => {
    const { getByText } = renderApp(<CatalogPage />);
    expect(getByText('Tesla Model S')).toBeDefined();
  });

  it('should render cars stock number, mileage, fuel type and color', () => {
    const { getByText } = renderApp(<CatalogPage />);
    expect(getByText('Stock # 1 - 20 km - Petrol - Silver')).toBeDefined();
  });

  it('when click on "View details" should navigate to show car page', async () => {
    const { getByText } = renderApp(<CatalogPage />);
    fireEvent.click(getByText('View details'));
    expect(getByText('Car view')).toBeDefined();
  });

  describe('should stick elements on scroll or resize', () => {
    it('should stick <Heading /> always on top', () => {
      const { getByTestId } = renderApp(<CatalogPage />);
      expect(getByTestId('sticky-header')).toContainElement(getByTestId('header'));
    });

    it('should stick <FilterNav /> always on left top side', () => {
      const { getByTestId } = renderApp(<CatalogPage />);
      expect(getByTestId('sticky-filters')).toContainElement(getByTestId('catalog-filters'));
    });
  });
});
