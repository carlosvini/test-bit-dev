import { theme as baseTheme } from "@chakra-ui/core";
import { merge } from "lodash-es";

const theme = merge({}, baseTheme, {
  colors: {
    blue: {
      500: "#0D73FF",
    },
    google: {
      500: "#4285F4",
    },
  },
});

export default theme;