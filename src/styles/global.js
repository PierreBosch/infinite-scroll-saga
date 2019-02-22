import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
   margin:0;
   padding: 0;
   box-sizing:0;
   outline:0;
 }

 html, body, #root {
   height: 100%;
 }

 body{
   text-rendering: optimizeLegibility !important;
   -webkit-font-smoothing: antialised !important;
 }

 button {
   cursor: pointer;
 }
`;

export default GlobalStyle;
