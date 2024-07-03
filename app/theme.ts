import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// biome-ignore lint/complexity/noBannedTypes: <explanation>
type ThemeConfig = {}

interface ThemeStyles {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    global: (props: any) => any;
}

const themeConfig: ThemeConfig = {};

const themeStyles: ThemeStyles = {
    global: (props) => ({
        body: {
            bg: mode("lightColor", "darkColor")(props),
        },
    }),
};

export const theme = extendTheme({
    config: themeConfig,
    styles: themeStyles,
});
