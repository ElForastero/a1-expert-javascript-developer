import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from '@/exceptions/ErrorBoundary';
import { ScrollToTop } from '@/components/base/ScrollToTop';
import routes from '@/config/routes';
import store from '@/store';
import Error404 from '@/pages/Error404';
import '@/server';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <ScrollToTop />
      <Route>
        <ErrorBoundary>
          <Switch>
            {routes.map(({ name, path, ...route }) => (
              <Route key={name} path={path} {...route} />
            ))}
            <Error404 />
          </Switch>
        </ErrorBoundary>
      </Route>
    </Router>
  </Provider>
);

render(<App />, document.getElementById('app'));
