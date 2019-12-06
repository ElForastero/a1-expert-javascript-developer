import React from 'react';
import { Link } from '@/components/base/Link';
import { Header } from '@/components/base/Typography';
import Box from '@/components/base/Box';
import route from '@/libs/route';
import { paragraph } from './Message.module.css';

const Message: React.FC = () => (
  <Box width="400px" display="flex" alignItems="center" flexDirection="column">
    <Header>404 - Not Found</Header>
    <p className={paragraph}>Sorry, the page you are looking for does not exist</p>
    <p className={paragraph}>
      You can always go back to the{' '}
      <Link to={route('catalog')} invertColors>
        homepage
      </Link>
    </p>
  </Box>
);

export default Message;
