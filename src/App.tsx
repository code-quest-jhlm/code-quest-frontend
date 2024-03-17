import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import cqTheme from '@/theme';
import Router from '@/router';
import AppContextProvider from '@/provider/AppProvider';

export default function App() {
  return (
    <MantineProvider theme={cqTheme} defaultColorScheme="dark">
      <AppContextProvider>
        <Router />
      </AppContextProvider>
    </MantineProvider>
  );
}
