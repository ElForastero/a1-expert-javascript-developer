import React, { useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

export const ScrollToTop: React.FC = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    const listener = () => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });

    return history.listen(listener);
  }, []);

  return <Fragment>{children}</Fragment>;
};
