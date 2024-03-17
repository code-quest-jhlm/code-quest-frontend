import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/App';
import AppContextProvider from '@/provider/AppProvider';

const container = document.getElementById('root');
const root = createRoot(container as HTMLDivElement);

root.render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>
);
