import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './styles/globals.css';
import './styles/animations.css';

import { theme } from './theme';
import { LocaleProvider } from './i18n/LocaleContext';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <LocaleProvider>
        <Notifications position="bottom-right" zIndex={20000} />
        <App />
      </LocaleProvider>
    </MantineProvider>
  </StrictMode>,
);
