import React from 'react';
import CommonLayout from '@/layouts/Common';
import { Content } from '@/components/base/Layout';
import { Box } from '@/components/base/Box';
import { Logo } from '@/components/base/Logo';
import Message from './Components/Message';

const Error404: React.FC = () => (
  <CommonLayout>
    <Content withTopPadding>
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
    </Content>
  </CommonLayout>
);

export default Error404;
