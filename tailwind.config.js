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
      brightGray: "#3D3D3D",
      lightTabGray: "#2F2F30",
      primary: "#137BFF",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      borderLight: "#303032",
      borderBright: "#3B3B3C",
      borderActive: "#137BFF",
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
      inset: {
        "-17px": "-17px",
      },
      textColor: {
        secondary: "#A2A2A2",
        tab: "#137BFF",
        tabTextDark: "#8C8C8C",
        tabTextLight: "#929292",
      },
      lineHeight: {
        0: 0,
      },
      colors: {
        "accent-1": "#333",
      },
      padding: {
        "10p": "10%",
        "5p": "5%",
      },
    },
  },
  variants: {
    cursor: ["hover"],
  },
  plugins: [],
};
