// color design token export
export const clorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E6FBFF",
    100: "#CCF7FE",
    200: "#99EEFD",
    300: "#66E6FC",
    400: "#33DDFB",
    500: "#00D5FA",
    600: "#00A0BC",
    700: "#006B7D",
    800: "#00353F",
    900: "#001519",
  },
};

// mui theme setting
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            //palette values for dark mode
            primary: {
              dark: clorTokens.primary[200],
              main: clorTokens.primary[500],
              light: clorTokens.primary[800],
            },
            neutral: {
              dark: clorTokens.grey[100],
              main: clorTokens.grey[200],
              medumMain: clorTokens.grey[300],
              medium: clorTokens.grey[400],
              light: clorTokens.grey[700],
            },
            background: {
              default: clorTokens.grey[900],
              alt: clorTokens.grey[800],
            },
          }
        : {
            //palette values for light mode
            primary: {
              dark: clorTokens.primary[700],
              main: clorTokens.primary[500],
              light: clorTokens.primary[50],
            },
            neutral: {
              dark: clorTokens.grey[700],
              main: clorTokens.grey[500],
              medumMain: clorTokens.grey[400],
              medium: clorTokens.grey[300],
              light: clorTokens.grey[50],
            },
            background: {
              default: clorTokens.grey[10],
              alt: clorTokens.grey[0],
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
