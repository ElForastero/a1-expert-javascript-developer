import React from 'react';
import { header } from './H1.module.css';

const H1: React.FC = ({ children }) => <h1 className={header}>{children}</h1>;

export default H1;
