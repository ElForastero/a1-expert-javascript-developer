import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Footer } from '@/components/composite/Footer';

afterEach(cleanup);

// ETA: 30 minutes
describe('<Footer />', () => {
  it('should render "© AUTO1 Group 2019"', () => {
    const { getByText } = render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(getByText(`© AUTO1 Group ${currentYear}`)).toBeDefined();
  });
});
