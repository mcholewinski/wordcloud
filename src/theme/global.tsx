import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset}

  * {
      box-sizing: border-box;
  }

  body {
      font-family: Helvetica, Arial, sans-serif;
  }

  html,
  body,
  #root {
      height: 100%;
  }
`;
