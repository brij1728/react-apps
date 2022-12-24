import { green, purple, red } from "@mui/material/colors";

import { createTheme } from "@mui/material/styles";

export const MUITheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    otherColor: {
      main: "#999",
    },
  },

  status: {
    danger: red[500],
  },
});
