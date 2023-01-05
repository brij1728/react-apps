import {
  breakpoints,
  fontSizes,
  primaryColors,
  secondaryColors,
  space,
} from "./ThemeUtils";

import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    breakpoints: string[];
    fontSizes: string[];
    space: string[];
    primaryColors: { [key in keyof typeof primaryColors]: string };
    secondaryColors: { [key in keyof typeof secondaryColors]: string };
  }
}

export const theme: DefaultTheme = {
  breakpoints,
  fontSizes,
  space,
  primaryColors,
  secondaryColors,
};
