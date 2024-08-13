import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "dark"
};

// original theme setting
// const theme = extendTheme({ config });
// or
// customize the theme to get darker gray
const theme = extendTheme({
    config,
    colors: {
        gray: {
            50: "#f9f9f9",
            100: "#ededed",
            200: "#d3d3d3",
            300: "#b3b3b3",
            400: "#a0a0a0",
            500: "#898989",
            600: "#6c6c6c",
            700: "#202020",
            800: "#121212",
            900: "#111",
        }
    }
});

export default theme;