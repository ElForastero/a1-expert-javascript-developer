import axios from 'axios';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ScrollToTop } from '@/components/base/ScrollToTop';
import routes from '@/config/routes';
import store from '@/store';
import '@/server';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <ScrollToTop />
      <Switch>
        {routes.map(({ name, ...route }) => (
          // @ts-ignore
          <Route key={name} {...route} />
        ))}
      </Switch>
    </Router>
  </Provider>
);

render(<App />, document.getElementById('app'));
