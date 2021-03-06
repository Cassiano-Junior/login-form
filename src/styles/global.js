import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --text-base: #afb6c2;
  --text-title: #d4ccb6;
  --background: #191816;
  --form-background: #24221f;
  --primary-color: #ffc632;
}

* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--background);
}

html, body, #root {
  height: 100%;
}
`