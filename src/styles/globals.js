import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
    ${normalize};

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;

    }
    body {
        font-family: ${(props) => props.theme.fonts.main};
        font-size: 1.6rem;
        background: ${(props) => props.theme.colors.background1};
        color: ${(props) => props.theme.colors.primary1};
        cursor: default;
    }
    h1,h2,h3,h4,h5,h6,button {
        font-family: ${(props) => props.theme.fonts.title};
    }
    a {
        text-decoration: none;
    }
    li{
        list-style: none;
    }
    ::-webkit-scrollbar {
        width: 13px;
        height: 13px;
    }
    ::-webkit-scrollbar-track {
        background: #EAECE9;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: rgb(100, 100, 100);
        background-clip: content-box;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background-color: #bdb9b9;
    } 

`;

export default GlobalStyles;
