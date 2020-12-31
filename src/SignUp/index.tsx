import { useHistory, withRouter } from "react-router";
import app from "../base";
import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  backgroundMain,
  primaryColor,
  backgroundContrast,
  primaryText,
} from "../themes/theme-config";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { Link } from "@material-ui/core";
import { Customer } from "../models/customer-model";
import CustomerService from "../services/customer-service";

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
      width: "45%",
      fontSize: 12,
    },
    textfieldID: {
      color: primaryColor,
      width: "100%",
      fontSize: 12,
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
      // marginBottom: 20,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
    paper: {
      padding: 25,
      overflow: "auto",
      backgroundColor: backgroundContrast,
      border: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "125%",
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
      marginBottom: 20,
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
      // marginBottom: 20,
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    textfieldBlock: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    forgot: {
      color: primaryColor,
      marginBottom: 10,
    },
    linkContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      width: "100%",
    },
    forgotDivider: {
      marginRight: 10,
      marginLeft: 10,
      color: primaryColor,
    },
    buttonsDiv: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      //alignItems: "flex-end",
      justifyContent: "flex-end",
    },
  })
);

const SignUpContainer = () => {
  const classes = useStyles();
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [registrationResponse, setRegistrationResponse] = useState("");

  const handleSignUp = async (event: any) => {
    event.preventDefault();
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          let customerInstance = new CustomerService();

          customerInstance.signUpUser({
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            idNumber: idNumber,
          });

          if (user && user.emailVerified === false) {
            user.sendEmailVerification().then(function () {
              setRegistrationResponse(`Successfully registered. Please open link sent to ${email} to verify email and continue to login.`)
            });
          } else {
            setRegistrationResponse(`An error occured while trying to register user with email ${email}.`)

          }
        });
    } catch (error) {
      setRegistrationResponse(error.message);
    }
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.boxWrapper}>
        <Paper className={classes.paper} elevation={3} square={true}>
          <div>
            <div className={classes.heading}>REGISTER</div>
          </div>
          <div className={classes.whiteText}>
            Please enter required information below
          </div>
          <form className={classes.form}>
            <div className={classes.textfieldBlock}>
              <TextField
                className={classes.textfield}
                autoComplete="off"
                margin="normal"
                label="First name"
                variant="outlined"
                required
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                InputProps={{
                  autoComplete: "off",
                }}
                autoFocus
              />
              <TextField
                className={classes.textfield}
                autoComplete="off"
                margin="normal"
                label="Last name"
                variant="outlined"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
                InputProps={{
                  autoComplete: "off",
                }}
                autoFocus
              />
            </div>
            <div className={classes.textfieldBlock}>
              <TextField
                className={classes.textfield}
                autoComplete="off"
                margin="normal"
                label="Phone number"
                variant="outlined"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
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
                label="Email"
                variant="outlined"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                InputProps={{
                  autoComplete: "off",
                }}
                autoFocus
              />
            </div>
            <div className={classes.textfieldBlock}>
              <TextField
                className={classes.textfield}
                autoComplete="off"
                margin="normal"
                label="Password"
                variant="outlined"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
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
                label="Confirm password"
                variant="outlined"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
                InputProps={{
                  autoComplete: "off",
                }}
                autoFocus
              />
            </div>
            <div className={classes.textfieldBlock}>
            <TextField
              className={classes.textfield}
              autoComplete="off"
              margin="normal"
              label="ID Number"
              variant="outlined"
              value={idNumber}
              onChange={(event) => setIdNumber(event.target.value)}
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
              label="Address"
              variant="outlined"
              value={idNumber}
              onChange={(event) => setIdNumber(event.target.value)}
              required
              InputProps={{
                autoComplete: "off",
              }}
              autoFocus
            />
            </div>

            <div className={classes.buttonsContainer}>
              <div className={classes.loginButtonContainer}>
                <Button
                  className={classes.boxBtn}
                  variant="outlined"
                  onClick={(event) => handleSignUp(event)}
                >
                  Submit
                </Button>
              </div>
            </div>
            <div className={classes.sentEmailText}>{registrationResponse}</div>
          </form>
          <div className={classes.buttonsDiv}>
            <Link className={classes.forgot} href="/login">
              Login
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

export default withRouter(SignUpContainer);
