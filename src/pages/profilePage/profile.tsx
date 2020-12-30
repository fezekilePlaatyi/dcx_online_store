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
      width: "30%",
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
      color: primaryText,
      fontSize: 14,
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
    textfieldDetails: {
      // marginRight: "29rem",
      display: "flex",
      marginBottom: "3rem",
      fontSize: 14,
    },
    textfieldDetailsFirst: {
      color: primaryColor,
      marginRight: 20,
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
          <h3 className={classes.heading}>PROFILE</h3>
        </div>
        <div className={classes.whiteText}>
          You can update your personal information and password
        </div>
        <form className={classes.form}>
          {/* <div className={classes.textfieldBlock}> */}
          <div className={classes.textfieldDetails}>
            <div className={classes.textfieldDetailsFirst}>First Name: </div>{" "}
            Nicholas
          </div>
          <div className={classes.textfieldDetails}>
            <div className={classes.textfieldDetailsFirst}>Last Name:</div>{" "}
            Bennet
          </div>
          {/* </div> */}
          {/* <div className={classes.textfieldBlock}> */}
          <div className={classes.textfieldDetails}>
            <div className={classes.textfieldDetailsFirst}>Phone Number:</div>{" "}
            0791234567
          </div>
          <div className={classes.textfieldDetails}>
            <div className={classes.textfieldDetailsFirst}>Email:</div>{" "}
            nicholas@test.com
          </div>
          {/* </div> */}
          {/* <div className={classes.textfieldBlock}> */}
          <div className={classes.textfieldDetails}>
            <div className={classes.textfieldDetailsFirst}>ID Number:</div>{" "}
            1234567891235
          </div>
          <div className={classes.textfieldDetails}>
            <div className={classes.textfieldDetailsFirst}>Address:</div> You
            can update address in Update Profile section
          </div>
          {/* </div> */}

          <div className={classes.buttonsContainer}>
            <div className={classes.loginButtonContainer}>
              <Button
                href="/updateProfile"
                className={classes.boxBtn}
                variant="outlined"
                onClick={updateCustomer}
              >
                UPDATE PROFILE
              </Button>
              <Button
                href="/changePassword"
                className={classes.boxBtn}
                variant="outlined"
                // onClick={updateCustomer}
              >
                CHANGE PASSWORD
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
