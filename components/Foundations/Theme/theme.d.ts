import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      [key: string]: {
        [key: string]: string;
      };
    };
    spacing: {
      [key: number]: string;

      breakpoints: {
        [key: string]: number;
      };
    };

    typography: {
      fontFamily: {
        [key: string]: string;
      };
      globalFontSize: {
        [key: string]: string;
      };
      fontSize: {
        [key: string]: {
          [key: string]: string;
        };
      };

      fontWeight: {
        [key: string]: string;
      };
    };
  }
}
