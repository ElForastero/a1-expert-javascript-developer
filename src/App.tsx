import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ScrollToTop } from '@/components/base/ScrollToTop';
import routes from '@/config/routes';
import './App.css';

const App = () => (
  <Router>
    <ScrollToTop />
    <Switch>
      {routes.map(({ name, ...route }) => (
        // @ts-ignore
        <Route key={name} {...route} />
      ))}
    </Switch>
  </Router>
);

render(<App />, document.getElementById('app'));
