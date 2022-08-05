export function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "8px 22px",
          textTransform: "capitalize",
          fontWeight: 700,
          lineHeight: 1.7142857142857142,
        },
      },
    },
  };
}
