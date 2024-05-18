import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
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
`;
