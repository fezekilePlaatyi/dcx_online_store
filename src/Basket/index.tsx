import React, { Component, useState } from "react";
import { withRouter } from "react-router";
import app from "../base";
import {
  createStyles,
  makeStyles,
  Theme
} from "@material-ui/core/styles";
import {
  backgroundMain,
  backgroundContrast,
  primaryColor,
  logo,
} from "../themes/theme-config";

import {
  Button,
  Link,
  Paper,
  TextField,
  Typography
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logoContainer: {
      maxWidth: 360,
      paddingTop: 20,
    },
    mainContainer: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: backgroundMain,
      padding: "44px",
    },
    textfield: {
      color: primaryColor,
    },
    forgot: {
      color: primaryColor,
    },
    boxBtn: {
      float: "left",
      backgroundColor: backgroundContrast,
      borderColor: primaryColor,
      color: primaryColor,
      width: "100%",
    },
    boxWrapper: {
      margin: 10,
      backgroundColor: backgroundMain,
    },
    buttonsContainer: {
      marginTop: 20,
      display: "flex",
      justifyContent: "space-between",
    },
    buttonsContainerRegister: {
      marginTop: 20,
      display: "flex",
      flexDirection: 'column',
      alignItems: 'center',
    },
    buttonsDiv: {
      width: "100%",
      display: "flex",
      flexDirection: 'column',
      alignItems: "flex-end",
      justifyContent: "flex-end",
    },
    errorMessage: {
      color: theme.palette.error.main,
      marginTop: 20,
      textAlign: "left",
    },
    paper: {
      padding: 20,
      overflow: "auto",
      backgroundColor: backgroundContrast,
      border: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "80%",
    },
    mobileContainer: {
      top: "15%",
    },
    mobileContainerRegister: {
      top: "10%",

    },
    loginButtonContainer: {
      position: "relative",
      width: "100%",
      marginBottom: 15,
    },
    loginButtonContainerRegister: {
      position: "relative",
      width: "100%",
      marginBottom: 15,
      marginTop: 15,
    },
    logText: {
      fontSize: 16,
      margin: 15,
    },
  })
);

const BasketContainer = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.mainContainer}>
      <h2>SOME BASKEt</h2>
    </div >
  );
}

export default withRouter(BasketContainer);