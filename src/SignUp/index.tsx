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
var saIdParser = require('south-african-id-parser');

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
  const [address, setAddress] = useState("");
  const [registrationResponse, setRegistrationResponse] = useState("");

  function isEmpty(str: any) {
    if (typeof str == 'undefined' || !str || str.length === 0 || str === "" || !/[^\s]/.test(str) || /^\s*$/.test(str) || str.replace(/\s/g, "") === "")
      return true;
    else
      return false;
  }

  function isValidEmail(inputText: string) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  }

  const handleSignUp = async (event: any) => {
    event.preventDefault();

    if (isEmpty(firstName)) {
      setRegistrationResponse("Firstname is required.");
      return;
    } else if (isEmpty(lastName)) {
      setRegistrationResponse("Lastname is required.");
      return;
    } else if (isEmpty(idNumber) || !saIdParser.validate(idNumber)) {
      setRegistrationResponse("Invalid South African ID Number.");
      return;
    } else if (isEmpty(phoneNumber) ||
      phoneNumber.length != 10 ||
      isNaN(parseInt(phoneNumber))
    ) {
      setRegistrationResponse("Please provide valid phone number of 10 digits.");
      return;
    } else if (parseInt(phoneNumber.charAt(0)) != 0) {
      setRegistrationResponse(
        "Phone Number must be 10 digits starting with Zero."
      );
      return;
    } else if (isEmpty(email) || !isValidEmail(email)) {
      setRegistrationResponse("Invalid Email Address.");
      return;
    } else if (isEmpty(password)) {
      setRegistrationResponse(
        "Password is required."
      );
      return;
    } else if (isEmpty(confirmPassword)) {
      setRegistrationResponse(
        "Please confirm password."
      );
      return;
    } else if (password != confirmPassword) {
      setRegistrationResponse(
        "Password and confirm password are not the same."
      );
      return;
    } else if (isEmpty(address)) {
      setRegistrationResponse(
        "Address is required."
      );
      return;
    } else {
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
              address: address
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
    }
  };

  const navigate = (nameOfComponent: string) => {
    history.push(nameOfComponent);
  }

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
                inputProps={{
                  maxLength: 32
                }}
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
                inputProps={{
                  maxLength: 32
                }}
              />
            </div>
            <div className={classes.textfieldBlock}>
              <TextField
                className={classes.textfield}
                autoComplete="off"
                margin="normal"
                label="Phone number"
                type="number"
                variant="outlined"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                required
                InputProps={{
                  autoComplete: "off",
                }}
                inputProps={{
                  maxLength: 10
                }}
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
                inputProps={{
                  maxLength: 42
                }}
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
              />
              <TextField
                className={classes.textfield}
                autoComplete="off"
                margin="normal"
                label="Full Address"
                variant="outlined"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                required
                InputProps={{
                  autoComplete: "off",
                }}
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
            <span
              className={classes.forgot}
              onClick={() => navigate('/login')}>
              Login
            </span>
            <div className={classes.forgotDivider}>|</div>
            <span
              className={classes.forgot}
              onClick={() => navigate('/')}>
              Home
            </span>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default withRouter(SignUpContainer);
