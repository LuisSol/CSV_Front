import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: "#000000";
      white: "#FFFFFF";
      aquaBlue: "#00716e";
      darkAquaBlue: "#135654";
      blueGray: "#586771";
      gray: "#414042";
      lightGray: "#f2f2f2";
      gray2: "#868686";
    };
  }
}

export const nomalTheme: DefaultTheme = {
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    aquaBlue: "#00716e",
    darkAquaBlue: "#135654",
    blueGray: "#586771",
    gray: "#414042",
    lightGray: "#f2f2f2",
    gray2: "#868686",
  },
};
