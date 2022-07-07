import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #0055FF;
    --secondary:linear-gradient(180deg, #FE983F 0%, #FF551F 100%);
    --text-primary: #232323;
    --text-secondary: rgba(0, 0, 0, 0.7);
    --text-primary-color:#0055FF;
    --text-secondary-color:#fe762f;
    --borders: rgba(0, 0, 0, 0.1);
    --primary-background: #F0F0F3;
    --box-shadow-background: #F0F0F3;
    --box-shadow:-5.13333px -5.13333px 15.4px #FFFFFF, 5.13333px 5.13333px 15.4px rgba(188, 188, 191, 0.7);
    --hover-box-shadow:inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
    --x1: 4px;
    --x2: 8px;
    --x3: 16px;
    --x4: 24px;
    --x5: 32px;
    --x6: 64px;
    --f1: 0.75rem;
    --f2: 0.875rem; 
    --f3: 1rem;
    --f4: 1.25rem;
    --f5: 1.5rem;
    --f6: 2rem;
  }
  body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--primary-background);
  overflow-x: hidden ;
}

#root {
  overflow-x: hidden ;
}

* {
  box-sizing: border-box;
  font-family:'Plus Jakarta San', "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif !important;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

p {
  margin: 0 !important;
  font-size: 14px;
}
h1 {
  margin:0 !important;
}
a {
  text-decoration-line: none !important;
}
a, a:visited, a:active {
  color: inherit !important;
}
ul {
  margin:0 !important;
  padding-inline-start: 8px !important;
}
nav{
  transform: translateX(-100%);
}
`;
export default GlobalStyle;
