import React from 'react';
import { paragraph } from './Typography.module.css';

export const Paragraph: React.FC = ({ children }) => <div className={paragraph}>{children}</div>;
