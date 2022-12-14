import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fefefe;
    --black: #010101;
    --grey: #c6c7ce;
    --light-grey: #E8EbED;
    --dark-grey: #626362;
    --light-blue: #6996ea;
    --red: #eb4c4c;
    --green: #30de30;
    --yellow : #deb330;
  }

  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Rubik', sans-serif;
  }
`;

export default GlobalStyle;
