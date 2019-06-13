import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}

body {
    background-color: #fafafa;
    font: 14px Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased !important;
}
`;

export default GlobalStyle;
