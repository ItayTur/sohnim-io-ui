"use client";

import { createTheme } from "@mui/material";

const secondaryMain = "#8a2be2";

export const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: secondaryMain,
        },
      },
    },
  },
});
