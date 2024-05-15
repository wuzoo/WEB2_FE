import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from './router/Router.jsx';
import { GlobalStyle } from './styles/GlobalStyle.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRouter />
  </React.StrictMode>,
);
