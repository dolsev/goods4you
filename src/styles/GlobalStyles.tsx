import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0; 
    font-family: 'Jost', sans-serif;
    color: black;
    background-color: #dadada;
    height: 100vh; 
    overflow: hidden; 
  }

  #root {
    height: 100%; 
  }
`;

export default GlobalStyles;
