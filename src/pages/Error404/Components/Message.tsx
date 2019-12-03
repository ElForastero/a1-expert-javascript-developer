import React from 'react';
import { Link } from '@/components/base/Link';
import { H1 } from '@/components/base/Typography';
import Box from '@/components/base/Box';
import { paragraph } from './Message.module.css';

const Message: React.FC = () => (
  <Box width="400px" display="flex" alignItems="center" flexDirection="column">
    <H1>404 - Not Found</H1>
    <p className={paragraph}>Sorry, the page you are looking for does not exist</p>
    <p className={paragraph}>
      You can always go back to the{' '}
      <Link to="/" invertColors>
        homepage
      </Link>
    </p>
  </Box>
);

export default Message;
