import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { AppRouter } from './router/Router.jsx';
import { GlobalStyle } from './styles/GlobalStyle.js';
import { Theme } from './styles/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>,
);
