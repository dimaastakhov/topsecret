module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      lightGray: "#1F1F20",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      borderLight: "#303032",
    }),
    fontFamily: {
      main: ["Roboto", "Open Sans"],
    },
    zIndex: {
      n: -1,
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
    },
    extend: {
      textColor: {
        secondary: "#A2A2A2",
      },
      lineHeight: {
        0: 0,
      },
      colors: {
        "accent-1": "#333",
      },
    },
  },
  variants: {
    cursor: ["hover"],
  },
  plugins: [],
};
