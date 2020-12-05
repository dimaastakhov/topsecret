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
      lightblue: "#137BFF",
      "#424242": "#424242",
      darkGray: "#181819",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      borderLight: "#303032",
      inputBorderGray: "#2E2E2F",
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
      fontSize: {
        "2.5xl": "1.625rem",
        "4.5xl": "2.5rem",
        8.5: "32px",
      },
      textColor: {
        secondary: "#A2A2A2",
        "5D5D5E": "#5D5D5E",
        545454: "#545454",
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
        "2/5": "40%",
        "1/5": "20%",
        "1/11": "9%",
        "5/8": "63%",
        31: "124px",
      },
    },
  },
  variants: {
    cursor: ["hover"],
  },
  plugins: [],
};
