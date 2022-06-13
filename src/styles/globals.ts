import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{        
        --white: #ffffff;
        --background: #fafafa;

        --black: #000000;

        --red: #E74040;

        --purple: #5429cc;
        --purple-100: #6933ff;

        --green: #96BB7C; 
        --green-100: #B2D7A7;               
            
        --gray-100: #E1E1E6;
        --gray-300: #A8A8B3;
        --gray-500: #737373;
        --gray-700: #323238;
        --gray-800: #29292E;        
        --gray-900: #121214;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }
    body{
        background: var(--background);
        --webkit-font-smoothing: antialiased;       
    }
    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }
    button{ 
        cursor: pointer;
    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
    a{
    color: inherit;
    text-decoration: none;
    }
    
`;
