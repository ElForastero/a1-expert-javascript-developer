import * as React from 'react';
import { render } from 'react-dom';
import { Index } from '@/views/cars/Index';
import Error404 from '@/views/pages/Error404';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Index} exact />
      <Route component={Error404} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById('app'));
