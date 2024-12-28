"use client";

import { createTheme } from "@mui/material";

const secondaryMain = "#8a2be2";
const foregroundPrimary = "#fff";

export const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: secondaryMain,
          color: foregroundPrimary,
        },
      },
    },
  },
});
