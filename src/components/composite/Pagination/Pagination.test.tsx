import React from 'react';
import { Provider } from 'react-redux';
import store, { AppThunk } from '@/store';
import { MemoryRouter, Route } from 'react-router-dom';
import { Pagination } from '@/components/composite/Pagination/Pagination';
import { updateLoading, updateData } from '@/store/cars';
import { render, cleanup } from '@testing-library/react';
import { Car } from '@/types/Car';
import '@testing-library/jest-dom/extend-expect';

const data: Car[] = Array.from(Array(10 * 10).keys()).map(i => ({
  stockNumber: i,
  manufacturerName: 'audi',
  modelName: 'a6',
  color: 'red',
  mileage: { number: 1, unit: 'km' },
  fuelType: 'Diesel',
  pictureUrl: '/image.svg',
}));

const fetchCars = (): AppThunk => async dispatch => {
  await dispatch(
    updateData({
      data,
      totalCount: 100,
      pagesCount: 10,
      loading: false,
      error: null,
    })
  );
  await dispatch(updateLoading(false));
};

const App = () => (
  <Pagination entity="cars" fetch={fetchCars} route="catalog">
    {({ renderPagination }) => renderPagination()}
  </Pagination>
);

const renderApp = (ui: React.ReactElement, { route } = { route: '/1' }) => {
  const Wrapper: React.FC = ({ children }) => (
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <Route path="/:page">{children}</Route>
      </MemoryRouter>
    </Provider>
  );
  return render(ui, { wrapper: Wrapper });
};

afterEach(cleanup);

// ETA: 1-2 hours
describe('<Pagination />', () => {
  it('should render "First" page link', () => {
    const { getByText } = renderApp(<App />, { route: '/1' });
    expect(getByText('First')).toBeDefined();
  });

  it('should render "Previous" page link', () => {
    const { getByText } = renderApp(<App />);
    expect(getByText('Previous')).toBeDefined();
  });

  it('should render "Page 2 of 10"', () => {
    const { getByText } = renderApp(<App />, { route: '/2' });
    expect(getByText('Page 2 of 10')).toBeDefined();
  });

  it('should render "Next" page link', () => {
    const { getByText } = renderApp(<App />);
    expect(getByText('Next')).toBeDefined();
  });

  it('should render "Last" page link', () => {
    const { getByText } = renderApp(<App />);
    expect(getByText('Last')).toBeDefined();
  });

  describe('on first page', () => {
    it('should disable "First" page link', () => {
      const { getByText } = renderApp(<App />);
      const element = getByText('First');
      expect(element.tagName).toBe('SPAN');
    });

    it('should disable "Previous" page link', () => {
      const { getByText } = renderApp(<App />);
      const element = getByText('Previous');
      expect(element.tagName).toBe('SPAN');
    });

    it('should enable "Next" page link', () => {
      const { getByText } = renderApp(<App />);
      const element = getByText('Next');
      expect(element.tagName).toBe('A');
    });
  });

  describe('on not last page and not first page', () => {
    it('should enable "First" page link', () => {
      const { getByText } = renderApp(<App />, { route: '/2' });
      const element = getByText('First');
      expect(element.tagName).toBe('A');
    });

    it('should enable "Previous" page link', () => {
      const { getByText } = renderApp(<App />, { route: '/2' });
      const element = getByText('Previous');
      expect(element.tagName).toBe('A');
    });

    it('should enable "Next" page link', () => {
      const { getByText } = renderApp(<App />, { route: '/2' });
      const element = getByText('Next');
      expect(element.tagName).toBe('A');
    });

    it('should enable "Last" page link', () => {
      const { getByText } = renderApp(<App />, { route: '/2' });
      const element = getByText('Last');
      expect(element.tagName).toBe('A');
    });
  });

  describe('on last page', () => {
    it('should disable "Next" page link', () => {
      const { getByText } = renderApp(<App />, { route: '/10' });
      const element = getByText('Next');
      expect(element.tagName).toBe('SPAN');
    });

    it('should disable "Last" page link', () => {
      const { getByText } = renderApp(<App />, { route: '/10' });
      const element = getByText('Last');
      expect(element.tagName).toBe('SPAN');
    });
  });
});
