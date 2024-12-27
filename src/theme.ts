"use client";

import { createTheme } from "@mui/material";

const accentPrimary = "hsl(280, 100%, 70%)";
const accentSecondary = "#8a2be2";

export const theme = createTheme({
  palette: {
    primary: {
      main: accentPrimary,
    },
    text: { primary: "#fff" },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: accentSecondary,
        },
      },
    },
  },
});
