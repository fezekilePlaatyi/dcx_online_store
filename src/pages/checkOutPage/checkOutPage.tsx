import React, { useEffect, useState } from "react";
//import firebase from "../../config/firebase";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  backgroundMain,
  primaryColor,
  backgroundContrast,
  primaryText,
  //  logo,
} from "../../themes/theme-config";
import { useHistory, useLocation } from "react-router";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import loaderImg from "../../assets/loader.gif";

import {
  // Button,
  Link,
  // Paper,
  // TextField,
  Typography,
  //Typography,
} from "@material-ui/core";
import InvoiceService from "../../services/invoice-service";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CustomerService from "../../services/customer-service";
import Util from "../../Util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import app from "../../base";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logoContainer: {
      maxWidth: 360,
      paddingTop: 20,
    },
    mainContainer: {
      minHeight: "calcu(100vh - 100px)",
      display: "flex",
      flexDirection: "column",
      // alignItems: "center",
      // justifyContent: "center",
      backgroundColor: backgroundMain,
      padding: "30px",
    },
    textfield: {
      // color: primaryColor,
      width: "30%",
      marginRight: 20,
      height: "35px",
      color: backgroundContrast,
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
      // [theme.breakpoints.down("sm")]: {
      //   width: "40%",
      // },
    },
    MuiInputBase: {
      root: {
        [theme.breakpoints.down("xs")]: {
          width: "100%",
        },
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      },
    },
    boxBtn: {
      float: "left",
      backgroundColor: backgroundContrast,
      borderColor: primaryColor,
      color: primaryColor,
      marginRight: 10,
      width: "30%",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
      // [theme.breakpoints.down("sm")]: {
      //   width: "35%",
      // },
    },
    boxBtnText:{
      [theme.breakpoints.down("xs")]: {
        fontSize: "10px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
      },
    },
    boxWrapper: {
      // margin: 10,
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
      flexDirection: "column",
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
    formHeading: {
      fontSize: 14,
      color: primaryText,
      marginBottom: 15,
      marginRight: 15,
    },
    textfieldPostal: {
      width: "19%",
    },
    passwordBlock: {
      marginTop: 30,
    },
    hidden: {
      display: "none",
    },
    errorMessage: {
      color: theme.palette.error.main,
      marginTop: 20,
      textAlign: "left",
    },
    answerYes: {
      paddingLeft: 5,
      cursor: "pointer",
      "&:hover": {
        color: primaryColor,
      },
    },
    loading: {
      width: 90,
      zIndex: 999,
      position: "absolute",
      display: "block",
      margin: "0 auto",
    },
  })
);

const CheckOut = () => {
  const classes = useStyles();
  const history = useHistory();
  const util = new Util();

  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = React.useState({
    checkedB: false,
  });

  const [payButtonDisabled, setPayButtonDisabledStatus] = useState(false);
  const [userDetails, setUserDetails] = useState<any>({});
  const [hideProfileAddressStatus, setHideProfileAddress] = useState(false);
  const [addressTypeQuestion, setAddressTypeQuestion] = useState(
    "Want to use different"
  );
  const [inputErrorMessage, setInputErrorMessage] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [loading, setLoading] = useState(false);

  let customerService = new CustomerService();
  customerService
    .getUserDetails()
    .then((data: any) => {
      setUserDetails(data.data());
    })
    .catch((error: any) => {
      notify(
        "No address found for this user. Please update your profile.",
        "/updateProfile"
      );
      console.log(error);
    });

  const procceddToPay = () => {
    if (!hideProfileAddressStatus) {
      if (!userDetails.address) {
        notify(
          "No address found for this user. Please update your profile.",
          "/updateProfile"
        );
      } else {
        saveInvoice(userDetails.address);
      }
    } else {
      if (!address) {
        setInputErrorMessage(
          "You chose to enter new Address for delivery, please enter it."
        );
      } else {
        saveInvoice(address);
      }
    }
  };

  const saveInvoice = (userAddress: any) => {
    let invoiceService = new InvoiceService();
    setPayButtonDisabledStatus(true);
    setLoading(true);

    var invoice: any = {
      invoiceData: util.retrieveBasketProductDataFromLocalStorage(),
      userDetails: userDetails,
      dateCreated: Date.now(),
    };

    invoiceService
      .createInvoice(invoice)
      .then(function () {
        setLoading(false);
        util.resetBasketProductDataFromLocalStorage();
        invoiceService
          .emailInvoice(invoice)
          .then(function (response) {
            if (state.checkedB == true && hideProfileAddressStatus == true) {
              let customerService = new CustomerService();
              customerService
                .updateSingleField({
                  address: userAddress,
                })
                .then(() => {
                  notify(
                    "Done Making Payment, You will be redirected to your Orders.",
                    "/orderHistory"
                  );
                })
                .catch((error) => {
                  notify(
                    "Error : Done Making Payment, but error occured while saving address. Please contact us to resolve this issue.",
                    "/orderHistory"
                  );
                });
            } else {
              notify(
                "Done Making Payment, You will be redirected to your Orders.",
                "/orderHistory"
              );
            }
          })
          .catch(function (response) {
            setLoading(false);
            notify(
              "Done Making Payment, An error occured while emailing invoice.",
              "/orderHistory"
            );
            console.log(response);
          });
      })
      .catch((error) => {
        console.log(error);
        notify("An error occured while creating an Invoice.", "none");
      });
  };

  useEffect(() => {
    setInputErrorMessage("");
    !hideProfileAddressStatus
      ? setAddressTypeQuestion("Want to use NEW address for this delivery")
      : setAddressTypeQuestion("Want to use ADDRESS from your PROFILE");
  }, [hideProfileAddressStatus]);

  const handlerToggleAddress = () => {
    hideProfileAddressStatus
      ? setHideProfileAddress(false)
      : setHideProfileAddress(true);
  };

  const notify = (message: string, redirectTo: string) => {
    toast(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
      onClose: () => {
        if (redirectTo != "none") history.push(redirectTo);
        else return;
      },
    });
  };

  return (
    <div className={classes.mainContainer}>
      <ToastContainer />
      <div
        className="loading-container"
        style={{
          position: "absolute",
          left: "45%",
          top: "25%",
          transform: "translate(-50%, -50%)",
          display: loading ? "block" : "none",
        }}
      >
        <div>
          <img src={loaderImg} className={classes.loading}></img>
        </div>
      </div>

      <div className={classes.boxWrapper}>
        <h3 className={classes.heading}>CHECK OUT</h3>
      </div>
      <div className={classes.whiteText}>Delivery address</div>
      <form className={classes.form}>
        <div className={classes.textfieldBlock}>
          <div
            className={
              hideProfileAddressStatus == false
                ? `${classes.formHeading} `
                : `${classes.hidden}`
            }
          >
            <b>Address:</b> {userDetails.address}
          </div>
          <div className={classes.formHeading}>
            {addressTypeQuestion} ?
            <Link
              className={classes.answerYes}
              onClick={() => handlerToggleAddress()}
            >
              Yes
            </Link>
          </div>
          <div
            className={
              hideProfileAddressStatus == true
                ? `undefined`
                : `${classes.hidden}`
            }
          >
            <TextareaAutosize
              className={classes.textfield}
              autoComplete="off"
              // margin="normal"
              placeholder="Enter your full Address here..."
              //variant="outlined"
              required
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              // InputProps={{
              //   autoComplete: "off",
              // }}
              onFocus={() => setInputErrorMessage("")}
              autoFocus
            />
            <br></br>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Save new address to profile?"
            />
          </div>

          {/* <TextField
            className={classes.textfieldPostal}
            autoComplete="off"
            margin="normal"
            label="Postal Code"
            variant="outlined"
            value={postalCode}
            onChange={(event) => setPostalCode(event.target.value)}
            required
            InputProps={{
              autoComplete: "off",
            }}
            autoFocus
          /> */}
        </div>

        {/* <div className={classes.passwordBlock}>
          <div className={classes.formHeading}>Payment information</div>
          <div className={classes.textfieldBlockPassword}>
            <TextField
              className={classes.textfield}
              autoComplete="off"
              margin="normal"
              label="Card Number"
              variant="outlined"
              // value={password}
              // onChange={(event) => setPassword(event.target.value)}
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
              label="Expiration Date"
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
              label="Security Code (CVV)"
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
              label="Cardholder Name"
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
        </div> */}

        <Typography paragraph={true} className={classes.errorMessage}>
          {inputErrorMessage}
        </Typography>

        <div className={classes.buttonsContainer}>
          <div className={classes.loginButtonContainer}>
            <Button
              className={classes.boxBtn}
              variant="outlined"
              onClick={procceddToPay}
              disabled={payButtonDisabled}
            >
             <div  className={classes.boxBtnText}>PAY NOW</div> 
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
