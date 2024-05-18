import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: 'border-box';
  }

  ul ol li {
    list-style: 'none';
  }

  html body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Open Sans', 'Helvetica Neue';
    font-size: '18px';
  }

  a {
    text-decoration: 'none'; 
  }

  ::-webkit-scrollbar{
    display: none;
  }
`;
