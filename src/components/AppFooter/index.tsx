import { Box, Text, rem } from '@mantine/core';
import React from 'react';

const AppFooter = () => (
  <Box pos="absolute" bottom={rem(16)} right={rem(32)}>
    <Text size="xs">Copyright &copy;{new Date().getFullYear()}</Text>
  </Box>
);

export default AppFooter;
