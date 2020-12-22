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
      marginBottom: 10,
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

const LogInContainer = () => {
  const classes = useStyles();
  const history = useHistory();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [errorMessage, setError] = useState("");



  const handleSignUp = async () => {
    try {
      const user = await app
        .auth()
        .signInWithEmailAndPassword(username, password);
      history.push("/");
    } catch (error) {
      setError(error.message.split('. ', 1)[0]);
    }
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.boxWrapper}>
        <Paper className={classes.paper} elevation={3} square={true}>
          <div className={classes.logoContainer}>
            <img
              style={{ width: "170px", height: "auto" }}
              src={logo}
              alt="logo"
            />
          </div>
          <div className={classes.logText}>Log into your account</div>
          <div>
            <form>
              <TextField
                className={classes.textfield}
                name="email"
                type="email"
                autoComplete="off"
                margin="normal"
                label="Email"
                fullWidth={true}
                variant="outlined"
                required
                InputProps={{
                  autoComplete: "off",
                }}
                autoFocus
                onFocus={() => setError("")}
                onChange={(event) => setusername(event.target.value)}
              />

              <TextField
                className={classes.textfield}
                autoComplete="off"
                margin="normal"
                label="Password"
                fullWidth={true}
                type="password"
                variant="outlined"
                InputProps={{ autoComplete: "off" }}
                name="password"
                required
                onFocus={() => setError("")}
                onChange={(event) => setpassword(event.target.value)}
              />

              <Typography paragraph={true} className={classes.errorMessage}>
                {errorMessage}
              </Typography>

              <div className={classes.buttonsContainer}>
                <div className={classes.loginButtonContainer}>
                  {<Button
                    onClick={() => handleSignUp()}
                    className={classes.boxBtn}
                    variant="outlined"
                  >
                    Login
                </Button>}
                </div>
              </div>

              <div className={classes.buttonsDiv}>
                <Link className={classes.forgot} href="forgotPassword">
                  Forgot Password?
                </Link>
                <Link className={classes.forgot} href="register">
                  Register
                </Link>
                <Link href="/">
                  Home
                </Link>
              </div>
            </form>
          </div>
        </Paper>
      </div>
    </div >
  );
}

export default withRouter(LogInContainer);