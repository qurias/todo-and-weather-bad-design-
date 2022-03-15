import { createGlobalStyle } from 'styled-components';

const StyledGlobal = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Fredoka', sans-serif;

  }

  li {
    list-style-type: none;
  }
`;

export default StyledGlobal;


