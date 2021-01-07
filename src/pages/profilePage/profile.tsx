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
import CustomerService from '../../services/customer-service'
import { useHistory, useLocation } from "react-router";

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
      [theme.breakpoints.down('xs')]: {
        padding: 15,
      },
      [theme.breakpoints.down('sm')]: {
        padding: 15,
      },
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
      [theme.breakpoints.down('xs')]: {
        width: "100%",
        marginBottom: 20,
      },
      [theme.breakpoints.down('sm')]: {
        width: "80%",
        marginBottom: 20,
      },
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
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
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
      [theme.breakpoints.down('xs')]: {
        padding: 15,
      },
      [theme.breakpoints.down('sm')]: {
        padding: 15,
      },
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
      [theme.breakpoints.down('xs')]: {
        width: "100%",
      },
      [theme.breakpoints.down('sm')]: {
        width: "100%",
      },
    },
    heading: {
      margin: "15px 0px",
      color: primaryColor,
      [theme.breakpoints.down('xs')]: {
        fontSize: 22,
      },
    },
    whiteText: {
      color: primaryText,
      fontSize: 14,
      [theme.breakpoints.down('xs')]: {
        fontSize: 12,
      },
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
      [theme.breakpoints.down('xs')]: {
        fontSize: 12,
        marginRight: 10,
      },
    },
    buttonsText:{
      [theme.breakpoints.down('xs')]: {
        fontSize: 10,
      },
    },
  })
);

const Profile = () => {
  const classes = useStyles();
  const history = useHistory();

  const [userDetails, setUserDetails] = useState<any>({})
  let customerService = new CustomerService()

  const sendPasswordResetEmailHandler = () => {
    customerService.sendPasswordResetEmail().then(function () {
      alert("Email sent with Link to reset password.")
    }).catch(function (error: any) {
      alert("Error occured while trying to send link.")
      console.log(error)
    });
  }

  customerService.getUserDetails().then((data: any) => {
    console.log("Data")
    console.log(data.data().firstName)
    setUserDetails(data.data())
  })
    .catch((error: any) => {
      alert("Error getting your profile details.")
      console.log(error)
    })

  const navigateToUpdateProfile = () => {
    history.push("/updateProfile")
  }

  return (
    <div className={classes.mainContainer}>
      <div className={classes.boxWrapper}>
        <div>
          <h3 className={classes.heading}>PROFILE</h3>
        </div>
        <div className={classes.whiteText}>
          You can update your personal information and password
        </div>
        <form className={classes.form}>
          <div className={classes.textfieldDetails}>
            <div className={classes.textfieldDetailsFirst}>First Name: </div>{" "}
            {userDetails.firstName}
          </div>
          <div className={classes.textfieldDetails}>
            <div className={classes.textfieldDetailsFirst}>Last Name:</div>{" "}
            {userDetails.lastName}
          </div>
          <div className={classes.textfieldDetails}>
            <div className={classes.textfieldDetailsFirst}>Phone Number:</div>{" "}
            {userDetails.phoneNumber}
          </div>
          <div className={classes.textfieldDetails}>
            <div className={classes.textfieldDetailsFirst}>Email:</div>{" "}
            {userDetails.email}
          </div>
          <div className={classes.textfieldDetails}>
            <div className={classes.textfieldDetailsFirst}>ID Number:</div>{" "}
            {userDetails.idNumber}
          </div>
          <div className={classes.textfieldDetails}>
            <div className={classes.textfieldDetailsFirst}>Address:</div>
            {userDetails.address}
          </div>

          <div className={classes.buttonsContainer}>
            <div className={classes.loginButtonContainer}>
              <Button
                onClick={navigateToUpdateProfile}
                className={classes.boxBtn}
                variant="outlined"
              >
              <div className={classes.buttonsText}>UPDATE PROFILE</div>  
              </Button>
              <Button
                className={classes.boxBtn}
                variant="outlined"
                onClick={sendPasswordResetEmailHandler}
              >
               <div className={classes.buttonsText}>CHANGE PASSWORD</div> 
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
