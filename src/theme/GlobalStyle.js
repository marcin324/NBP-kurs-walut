import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  font-size: 62.5%; /* happy rems */
}

body {
  color: #1F1F1F;
  background: #FFFFFF;
  font-size: 1.6rem; /* happy rems */
  font-family: 'Montserrat', sans-serif;
}
`;

export default GlobalStyle;
