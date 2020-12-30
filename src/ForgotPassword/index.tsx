import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  backgroundMain,
  primaryColor,
  backgroundContrast,
  primaryText,
  logo,
} from "../themes/theme-config";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import app from "../base";
import { Link } from "@material-ui/core";

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
      fontSize: 12,
    },
    boxBtn: {
      float: "left",
      backgroundColor: backgroundContrast,
      borderColor: primaryColor,
      color: primaryColor,
      width: "100%",
      fontSize: 12,
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
      width: "100%",
    },
    paper: {
      padding: 25,
      overflow: "auto",
      backgroundColor:  backgroundContrast,
      border: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
    mobileContainer: {
      top: "15%",
    },
    mobileContainerRegister: {
      top: "10%",
    },
    loginButtonContainer: {
     // margin: theme.spacing(1),
      position: "relative",
      width: "100%",
    },
    heading: {
      margin: "15px 0px",
      color: primaryColor,
    },
    whiteText: {
      color: primaryText,
    },
    sentEmailText: {
      color: primaryColor,
    },
    form: {
      marginTop: 20,
    //  marginBottom: 20,
      width: '100%',
    },
    linkContainer: {
      display: "flex",
      flexDirection: "row",
     // alignItems: "flex-end",
      width: '100%',
    },
    forgot: {
      color: primaryColor,
      marginBottom: 10,
    },
    forgotDivider: {
      marginRight: 10,
      marginLeft: 10,
      color: primaryColor,
    },
  })
);

const ForgotPassword = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [resetPasswordResults, setResetPasswordResults] = useState("");

  const resetPasswordWithEmail = async () => {
    await app
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setResetPasswordResults(
          `An email has been sent to ${email} with further instructions.`
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.boxWrapper}>
        <Paper className={classes.paper} elevation={3} square={true}>
          <div className={classes.logoContainer}>
            <img
              style={{ width: "180px", height: "auto" }}
              src={logo}
              alt="logo"
            />
          </div>
          <div className={classes.heading}>FORGOT PASSWORD?</div>
          <div className={classes.whiteText}>
            Enter your e-mail address below to reset your password
          </div>
          <form className={classes.form}>
            <TextField
              className={classes.textfield}
              autoComplete="off"
              margin="normal"
              label="Email"
              fullWidth={true}
              placeholder="Email"
              variant="outlined"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              InputProps={{
                autoComplete: "off",
              }}
              autoFocus
            />

            <div className={classes.buttonsContainer}>
              <div className={classes.loginButtonContainer}>
                <Button
                  className={classes.boxBtn}
                  variant="outlined"
                  onClick={resetPasswordWithEmail}
                >
                  Send email
                </Button>
              </div>
            </div>
            <div className={classes.sentEmailText}>{resetPasswordResults}</div>
          </form>
          <div className={classes.linkContainer}>
            <Link className={classes.forgot} href="/login">
              LOGIN
            </Link>
            <div className={classes.forgotDivider}>|</div>
            <Link className={classes.forgot} href="/">
              Home
            </Link>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default ForgotPassword;