import React from 'react';
import CarPage from '@/pages/Car';
import Error404 from '@/pages/Error404';
import { render, cleanup } from '@testing-library/react';
import store, { AppThunk } from '@/store';
import { updateData, updateLoading, updateError } from '@/store/car';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { NotFoundException } from '@/exceptions/NotFoundException';

afterEach(cleanup);

jest.mock('@/store/car', () => ({
  __esModule: true,
  ...require.requireActual('@/store/car'),

  fetchCar: (id: number): AppThunk => async dispatch => {
    if (id === 1) {
      dispatch(
        updateData({
          stockNumber: 1,
          manufacturerName: 'Tesla',
          modelName: 'Model S',
          color: 'silver',
          mileage: { number: 20, unit: 'km' },
          fuelType: 'Petrol',
          pictureUrl: '/car.svg',
        })
      );
      dispatch(updateLoading(false));
    } else {
      dispatch(updateError(404));
    }
  },
}));

const renderApp = (ui: React.ReactElement, { route = '/car/1' } = {}) => {
  const Wrapper: React.FC = ({ children }) => (
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <Switch>
          <Route exact path="/car/:id">
            {children}
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
      </MemoryRouter>
    </Provider>
  );
  return render(ui, { wrapper: Wrapper });
};

// ETA: 2 hours
describe('<Show />', () => {
  it('should redirect to 404 if car is not found', () => {
    try {
      renderApp(<CarPage />, { route: '/car/2' });
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException);
    }
  });

  it('should render car manufacturer name', () => {
    const { getByText } = renderApp(<CarPage />);
    expect(getByText(/Tesla/i)).toBeDefined();
  });

  it('should render car model name', () => {
    const { getByText } = renderApp(<CarPage />);
    expect(getByText(/Model S/i)).toBeDefined();
  });

  it('should render car stock number', () => {
    const { getByText } = renderApp(<CarPage />);
    expect(getByText(/stock # 1/i)).toBeDefined();
  });

  it('should render car mileage', () => {
    const { getByText } = renderApp(<CarPage />);
    expect(getByText(/20 km/i)).toBeDefined();
  });

  it('should render car fule type', () => {
    const { getByText } = renderApp(<CarPage />);
    expect(getByText(/Petrol/i)).toBeDefined();
  });

  it('should render car color', () => {
    const { getByText } = renderApp(<CarPage />);
    expect(getByText(/Silver/i)).toBeDefined();
  });

  it('should render "Save" favorites <Button />', () => {
    const { getByTestId } = renderApp(<CarPage />);
    expect(getByTestId('favorites')).toBeDefined();
  });
});
