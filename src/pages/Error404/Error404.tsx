import React from 'react';
import CommonLayout from '@/layouts/Common';
import Box from '@/components/base/Box';
import Logo from '@/components/base/Logo';
import Message from './Components/Message';

const Error404 = () => (
  <CommonLayout>
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Logo />
      <Message />
    </Box>
  </CommonLayout>
);

export default Error404;
