import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
    // primary color
        darkBlue: "hsl(233, 26%, 24%)",
        lime: "hsl(136, 65%, 51%)",
        cyan: "hsl(192, 70%, 51%)",

    // neutral color
        grayish: "hsl(233, 8%, 62%)",
        lightGrayish: "hsl(220, 16%, 96%)",
        lightGrey: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
    },

    fonts: {
    // font
        light: "300",
        regular: "400",
        bold: "700",
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

