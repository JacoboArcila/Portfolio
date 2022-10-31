import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        color: black;
        font-family: 'Montserrat', 'sans-serif';
    }
    body {
        /* background-color: ${({theme}) => theme.background}; */
        background-color: #141414;
    }
`
export default GlobalStyles;