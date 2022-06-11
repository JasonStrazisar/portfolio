import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${(props) => props.theme.colors.grayScale.offBlack};
        width: 100%;
        font-family: ${(props) => props.theme.typography.fontFamily.primary};
    }

    html {
        font-size: ${(props) => props.theme.typography.globalFontSize.desktop};
    }

    @media only screen and (min-width: ${(props) =>
      props.theme.spacing.breakpoints.desktopLg}) {
          html {
              font-size: ${(props) =>
                props.theme.typography.globalFontSize.desktopLg};
          }
      }

    @media only screen and (max-width: ${(props) =>
      props.theme.spacing.breakpoints.tablet}) {
        html {
            font-size: ${(props) =>
              props.theme.typography.globalFontSize.tablet};
        }
    }
    
    @media only screen and (max-width: ${(props) =>
      props.theme.spacing.breakpoints.mobile}) {
        html {
            font-size: ${(props) =>
              props.theme.typography.globalFontSize.mobile};
        }
    }
`;

export default GlobalStyle;
