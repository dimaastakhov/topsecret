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
      borderLight: "#303032",
      primary: "#137BFF",
      "#424242": "#424242",
      darkGray: "#181819",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      borderLight: "#303032",
      borderBright: "#3B3B3C",
      borderActive: "#137BFF",
      inputBorderGray: "#2E2E2F",
      iconBorder: "#2a2a2b"
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
        tab: "#137BFF",
        tabTextDark: "#8C8C8C",
        tabTextLight: "#929292",
        "5D5D5E": "#5D5D5E",
        545454: "#545454",
      },
      fontSize: {
        "1.5xl": "1.375rem",
        "2.5xl": "1.625rem",
        "4.5xl": "2.5rem",
        8.5: "32px",
      },
      flex: {
        "1/3": "1 1 33%",
      },
      lineHeight: {
        0: 0,
        3.5: "14px",
        5.25: "21px",
        5.5: "22px",
        13: "52px",
      },
      colors: {
        "accent-1": "#333",
        "137BFF": "#137BFF",
      },
      spacing: {
        7.5: "30px",
        12.5: "50px",
        17: "68px",
        17.5: "70px",
        22: "88px",
        88: "362px",
        100: "26rem",
        102: "504px",
        130: "520px",
        140: "562px",
      },
      inset: {
        "-17px": "-17px",
        "2/5": "40%",
        "1/5": "20%",
        "1/11": "9%",
        "5/8": "63%",
        31: "124px",
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
