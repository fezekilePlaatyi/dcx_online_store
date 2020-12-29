import { createMuiTheme } from "@material-ui/core/styles";
import {
  primaryColor,
  secondaryColor,
  primaryText,
  disabled,
  backgroundMain,
  backgroundContrast,
  error,
  lightBorders,
} from "./theme-config";

const theme = createMuiTheme({
  overrides: {
    MuiTableCell: {
      root: {
        wordBreak: "normal",
      },
    },
    MuiButton: {
      contained: {
        "&$disabled": { backgroundColor: "#fff" },
      },
      label:{
        fontSize: 14,
      },
    },
    MuiListItemText:{
      primary:{ 
        fontSize: 14,
      }, 
    },
    MuiSvgIcon:{
      root:{
        fontSize: 22,
      },
    },

    MuiOutlinedInput: {
      root: {
        position: "relative",
        "& $notchedOutline": {
          borderColor: primaryText,
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: primaryText,
        },
        fontSize: 14,
      },
    },
    // MuiLink:{
    //   root:{
    //   "&$focused": {
    //     color: primaryColor,
    //   },
    //   "&:hover": {
    //     borderColor: primaryText,
    //   },
    // },
    // },
    MuiInputBase: {
      formControl: {
        fontSize: 14,
      },
    },
    MuiInput: {
      root: {
        "&$disabled": { color: "#bababa" },
        "&$underline:after": {
          borderBottom: "1px solid rgba(200, 200, 200, 0.42)",
        },

        "&$underline:before": {
          borderBottom: "1px solid rgba(200, 200, 200, 0.42)",
        },
        fontSize: 14,
      },
    },
    MuiIconButton: {
      root: {
        color: primaryColor,
      },
    },
    MuiAvatar: { colorDefault: { color: primaryColor } },
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: primaryColor,
        },
        "&$disabled": { color: "#65666a" },
        fontSize: 14,
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: backgroundContrast,
        border: `1px solid #65666a`,
      },
    },
    // @ts-ignore
    MuiPickersCalendarHeader: {
      iconButton: {
        backgroundColor: "transparent",
      },
      dayLabel: {
        color: primaryColor,
      },
    },
  },
  palette: {
    primary: {
      main: primaryColor,
      contrastText: primaryText,
      dark: backgroundMain,
      light: lightBorders,
    },
    secondary: {
      main: secondaryColor,
      contrastText: primaryText,
      dark: backgroundContrast,
    },
    action: {
      active: primaryText,
      disabled: disabled,
    },
    text: {
      primary: primaryText,
      secondary: primaryText,
      disabled: disabled,
    },
    error: {
      main: error,
    },
    divider: secondaryColor,
  },
});

export default theme;
