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
      justifyContent: "center",
      backgroundColor: backgroundMain,
      padding: "44px",
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
      padding: 15,
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
    },
    heading: {
      margin: "15px 0px",
      color: primaryColor,
    },
    whiteText: {
      color: primaryColor,
    },
    sentEmailText: {
      color: primaryColor,
    },
    form: {
      marginTop: 20,
      marginBottom: 20,
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

const Profile = () => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [address, setAddress] = useState("");
  const [registrationResponse, setRegistrationResponse] = useState("");

  const updateCustomer = async () => {
    console.log("updating customer information...");
    // await firebase
    //   .registerCustomer(firstName, email, password)
    //   .then(() => {
    //     setRegistrationResponse(
    //       `* Click on link sent to email ${email}, to verify your email address and login.`
    //     );
    // })
      // .catch((error: any) => {
      //   console.log(error);
      //   alert(error.message.toString());
      // });
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.boxWrapper}>
        {/* <Paper className={classes.paper} elevation={3} square={true}> */}
        <div>
          {/* <div className={classes.logoContainer}>
            <img
              style={{ width: "70px", height: "auto" }}
              src={logo}
              alt="logo"
            />
          </div> */}
          <div className={classes.heading}>PROFILE</div>
        </div>
        <div className={classes.whiteText}>
          Please update personal information
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
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              required
              InputProps={{
                autoComplete: "off",
              }}
              autoFocus
            />
          </div>
          <div className={classes.passwordBlock}>
            <div className={classes.whiteText}>Change password</div>
            <div className={classes.textfieldBlockPassword}>
              <TextField
                className={classes.textfield}
                autoComplete="off"
                margin="normal"
                label="Old password"
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
                label="New password"
                variant="outlined"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
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
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
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
                onClick={updateCustomer}
              >
                SAVE
              </Button>
            </div>
            {/* <div className={classes.linkContainer}>
              <Link className={classes.forgot} href="#/login">
                LOGIN
            </Link>
              <Link className={classes.forgot} href="#/home">
                Home
            </Link>
            </div> */}
          </div>
          <div className={classes.sentEmailText}>{registrationResponse}</div>
        </form>
        {/* </Paper> */}
      </div>
    </div>
  );
};

export default Profile;
