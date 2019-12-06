import React from 'react';
import { paragraph } from './Typography.module.css';

const Paragraph: React.FC = ({ children }) => <div className={paragraph}>{children}</div>;

export default Paragraph;
