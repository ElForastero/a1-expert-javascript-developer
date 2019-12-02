import React from 'react';
import { content } from './Content.module.css';

type Props = {
  children: React.ReactNode;
};

const Content: React.FC<Props> = ({ children }) => (
  <section className={content}>{children}</section>
);

export default Content;
