import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import cqTheme from '@/theme';
import Router from '@/router';

export default function App() {
  return (
    <MantineProvider theme={cqTheme} defaultColorScheme="dark">
        <Router />
    </MantineProvider>
  );
}
