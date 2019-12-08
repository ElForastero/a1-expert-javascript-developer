import React, { useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

/**
 * Listens for the route changes and smoothly scrolls
 * the user to the top of the page.
 */
export const ScrollToTop: React.FC = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    const listener = () => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });

    // Return unregister callback
    return history.listen(listener);
  }, []);

  return <Fragment>{children}</Fragment>;
};
