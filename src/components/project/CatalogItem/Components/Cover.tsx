import React from 'react';
import { cover } from './Cover.module.css';

type Props = {
  src?: string;
};

const Cover: React.FC<Props> = ({ src }) => (
  <div className={cover} style={{ backgroundImage: src ? `url(${src})` : 'none' }} />
);

export default Cover;
