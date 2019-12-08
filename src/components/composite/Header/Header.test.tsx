import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '@/components/composite/Header';

afterEach(cleanup);

// ETA: 1 Hour
describe('<Header />', () => {
  it('should render <Logo />', () => {
    const { getByRole } = render(<Header />, { wrapper: MemoryRouter });
    expect(getByRole('img')).toBeDefined();
  });

  it('should render "My Orders" <Link to="/favorites" />', () => {
    const { getByText } = render(<Header />, { wrapper: MemoryRouter });
    expect(getByText('My Orders')).toHaveAttribute('href', '/favorites');
  });
});
