import React, { useMemo } from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import {
  CssBaseline,
  StyledEngineProvider,
  useMediaQuery,
} from "@mui/material";
import { shape } from "./shape";
import components from "./overrides/Index";
import typography from "./typography";
import { spacing } from "./spacing";

function ThemeContext({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const themeConfig = useMemo(
    () => ({
      palette: {
        mode: prefersDarkMode ? "dark" : "light",
      },
      shape,
      spacing,
      typography,
    }),
    [prefersDarkMode]
  );

  let theme = createTheme(themeConfig);
  theme.components = components(theme);
  theme = responsiveFontSizes(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default ThemeContext;
