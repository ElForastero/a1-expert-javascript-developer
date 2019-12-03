import * as React from 'react';
import { render } from 'react-dom';
import Catalog from '@/pages/Catalog';
import Error404 from '@/pages/Error404';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Catalog} exact />
      <Route component={Error404} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById('app'));
