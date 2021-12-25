import { createGlobalStyle } from "styled-components";
import { BG_COLOR } from "constants/colors";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Catamaran", sans-serif;
    background: ${BG_COLOR};
  }
`;

export default GlobalStyle;
