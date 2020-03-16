import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
    ${reset};

    html {
        height: 100%;
    } 
    
    body {
        margin: 0;
        padding:0;
        font-family: "Noto Sans KR", 'Roboto', sans-serif; 
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing:border-box;
        min-height: 100%;
    }

    * {
        box-sizing:border-box;
    }

    #root {
        min-height: 100%;
    }

    a {
        color: inherit;
        text-decoration:none;
    }
    
    input:focus{
        outline:none;
    }
`;
