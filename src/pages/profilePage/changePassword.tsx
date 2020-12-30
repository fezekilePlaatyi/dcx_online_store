import React, { useState } from "react";
//import firebase from "../../config/firebase";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  backgroundMain,
  primaryColor,
  backgroundContrast,
  primaryText,
  //  logo,
} from "../../themes/theme-config";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import {
  // Button,
  Link,
  // Paper,
  // TextField,
  // Typography,
  //Typography,
} from "@material-ui/core";

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
      // alignItems: "center",
      // justifyContent: "center",
      backgroundColor: backgroundMain,
      padding: "30px",
    },
    textfield: {
      color: primaryColor,
      width: "30%",
      marginRight: 20,
    },
    boxBtn: {
      float: "left",
      backgroundColor: backgroundContrast,
      borderColor: primaryColor,
      color: primaryColor,
      marginRight: 10,
      width: "25%",
    },
    boxWrapper: {
      margin: 10,
      backgroundColor: backgroundMain,
    },
    buttonsContainer: {
      marginTop: 20,
      marginBottom: 20,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    paper: {
      padding: 25,
      overflow: "auto",
      backgroundColor: backgroundContrast,
      border: "none",
      display: "flex",
      flexDirection: "column",
      // alignItems: "center",
      width: "100%",
    },
    mobileContainer: {
      top: "15%",
    },
    mobileContainerRegister: {
      top: "10%",
    },
    loginButtonContainer: {
      margin: theme.spacing(1),
      position: "relative",
      width: "50%",
    },
    heading: {
      margin: "15px 0px",
      color: primaryColor,
    },
    whiteText: {
      fontSize: 14,
      textTransform: "uppercase",
      color: primaryColor,
    },
    sentEmailText: {
      color: primaryColor,
    },
    form: {
      // marginTop: 20,
      // marginBottom: 20,
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    textfieldBlock: {
      display: "flex",
      flexDirection: "row",
      // justifyContent: "space-between",
    },
    textfieldBlockPassword: {
      display: "flex",
      flexDirection: "column",
      // justifyContent: "space-between",
    },
    forgot: {
      color: primaryColor,
    },
    linkContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
    },
    passwordBlock: {
      marginTop: 30,
    },
  })
);

const ChangePassword = () => {
  const classes = useStyles();

  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className={classes.mainContainer}>
      <div className={classes.boxWrapper}>
        <div className={classes.whiteText}>Please provide new password</div>
        <form className={classes.form}>
          <div className={classes.passwordBlock}>
            <div className={classes.textfieldBlockPassword}>
              <TextField
                className={classes.textfield}
                autoComplete="off"
                margin="normal"
                label="New password"
                variant="outlined"
                // value={confirmPassword}
                // onChange={(event) => setConfirmPassword(event.target.value)}
                required
                InputProps={{
                  autoComplete: "off",
                }}
                autoFocus
              />
              <TextField
                className={classes.textfield}
                autoComplete="off"
                margin="normal"
                label="Confirm new password"
                variant="outlined"
                // value={confirmPassword}
                // onChange={(event) => setConfirmPassword(event.target.value)}
                required
                InputProps={{
                  autoComplete: "off",
                }}
                autoFocus
              />
            </div>
          </div>
          <div className={classes.buttonsContainer}>
            <div className={classes.loginButtonContainer}>
              <Button
                className={classes.boxBtn}
                variant="outlined"
                // onClick={updateCustomer}
              >
                SAVE
              </Button>
              <Button
                href="/profile"
                className={classes.boxBtn}
                variant="outlined"
                // onClick={updateCustomer}
              >
                PROFILE
              </Button>
            </div>
          </div>
          {/* <div className={classes.sentEmailText}>{registrationResponse}</div> */}
        </form>
        {/* </Paper> */}
      </div>
    </div>
  );
};

export default ChangePassword;
