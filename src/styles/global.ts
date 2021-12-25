import { createGlobalStyle } from "styled-components";
import { BG_COLOR } from "constants/colors";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Whitney';
    src: url(/fonts/whitney/whitneybook.otf) format("opentype");
    font-display: block;
  }

  @font-face {
    font-family: 'Whitney';
    src: url(/fonts/whitney/whitneymedium.otf) format("opentype");
    font-weight: 500; 
    font-display: block;
  }

  @font-face {
    font-family: 'Whitney';
    src: url(/fonts/whitney/whitneysemibold.otf) format("opentype");
    font-weight: 600; 
    font-display: block;
  }

  @font-face {
    font-family: 'Whitney';
    src: url(/fonts/whitney/whitneybold.otf) format("opentype");
    font-weight: 700; 
    font-display: block;
  }

  @font-face {
    font-family: 'Gerbera';
    src: url(fonts/gerbera/gerberamedium.ttf) format("truetype");
    font-display: block;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Whitney", sans-serif;
    background: ${BG_COLOR};
  }
`;

export default GlobalStyle;
