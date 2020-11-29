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
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      borderLight: "#303032",
    }),
    fontFamily: {
      main: ["Roboto", "Open Sans"],
    },
    fontSize: {
      8.5: "32px",
      10: "40px",
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
        fff: "#fff",
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
