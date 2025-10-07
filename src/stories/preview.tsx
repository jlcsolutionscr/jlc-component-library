import { createTheme, ThemeProvider } from "@mui/material/styles";
import type { Preview } from "@storybook/react-vite";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#FFF",
          "&.Mui-selected": {
            color: "#90CAF9",
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: "standard",
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#1976D2",
    },
    secondary: {
      main: "#F50057",
    },
    background: {
      paper: "#FFF",
    },
  },
});

const preview: Preview = {
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
