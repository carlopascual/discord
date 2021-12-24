import { createGlobalStyle } from "styled-components";
import { BG_COLOR } from "constants/colors";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${BG_COLOR};
  }
`;

export default GlobalStyle;
