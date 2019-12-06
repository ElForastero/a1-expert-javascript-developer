import React from 'react';
import { container } from './Backplate.module.css';

export const Backplate: React.FC = ({ children }) => <div className={container}>{children}</div>;
