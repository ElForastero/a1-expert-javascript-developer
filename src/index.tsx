import * as React from 'react';
import { render } from 'react-dom';
import { Index } from 'views/cars/Index';
import '/src/server';

render(<Index />, document.getElementById('root'));
