import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Colors } from "./colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// declare module "@mui/material/styles" {
//   interface Components {
//     MainMenuFrameComponent: {};
//   }
// }

export const theme = createTheme({
  // palette: {
  //   mode: "light",
  // },
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 14,
    h1: {
      fontSize: 60,
    },
    h2: {
      fontSize: 48,
    },
    h3: {
      fontSize: 34,
    },
    h4: {
      fontSize: 24,
    },
    h5: {
      fontSize: 20,
    },
    h6: {
      fontSize: 16,
    },
    subtitle1: {
      fontSize: 14,
    },
    subtitle2: {
      fontSize: 12,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 12,
    },
    button: {
      fontSize: 12,
    },
    caption: {
      fontSize: 10,
    },
  },

  /*  components: {
    MainMenuFrameComponent: {
      styleOverrides: {
        root: {
          width: 250,
          height: 400,
          border: `12px ${Colors.primary}`,
          borderStyle: "ridge solid",
          borderRadius: "36px",
        },
      },
    },
  }, */
});
