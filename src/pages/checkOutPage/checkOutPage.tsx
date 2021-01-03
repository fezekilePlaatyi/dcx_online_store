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
import {
  // Button,
  Link,
  // Paper,
  // TextField,
  Typography,
  //Typography,
} from "@material-ui/core";
import InvoiceService from '../../services/invoice-service';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CustomerService from "../../services/customer-service";
import Util from "../../Util"

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
      display: 'none',
    },
    errorMessage: {
      color: theme.palette.error.main,
      marginTop: 20,
      textAlign: "left",
    },
    answerYes: {
      paddingLeft: 5,
    }
  })
);

const CheckOut = () => {
  const classes = useStyles();
  const history = useHistory();
  const util = new Util()

  const [postalCode, setPostalCode] = useState("")
  const [address, setAddress] = useState("")
  const [state, setState] = React.useState({
    checkedB: false,
  });
  const [userDetails, setUserDetails] = useState<any>({})
  const [hideProfileAddressStatus, setHideProfileAddress] = useState(false)
  const [addressTypeQuestion, setAddressTypeQuestion] = useState("Want to use different")
  const [inputErrorMessage, setInputErrorMessage] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  let customerService = new CustomerService()
  customerService.getUserDetails().then((data: any) => {
    setUserDetails(data.data())
  })
    .catch((error: any) => {
      alert("Error getting your profile details.")
      console.log(error)
    })

  const procceddToPay = () => {

    if (!hideProfileAddressStatus) {
      if (!userDetails.address) {
        alert("No address found in you profile. Update your profile with your Address.")
      }
      else {
        saveInvoice(userDetails.address)
      }
    } else {
      if (!address) {
        setInputErrorMessage("You chose to enter new Address for delivery, please enter it.")
      }
      else {
        saveInvoice(address)
      }

    }
  }

  const saveInvoice = (userAddress: any) => {
    let invoiceService = new InvoiceService()
    let userDetails = {
      userAddress: userAddress
    }

    var invoice: any = {
      invoiceData: util.retrieveBasketProductDataFromLocalStorage(),
      userDetails: userAddress
    }

    invoiceService.createInvoice(invoice).then(function () {

      alert("Done Making Payment, You will be redirected to your Orders.")
      util.resetBasketProductDataFromLocalStorage()
      if (state.checkedB == true && hideProfileAddressStatus == true) {
        let customerService = new CustomerService()
        customerService.updateSingleField({
          address: userAddress
        }).then(() => {
          history.push("/orderHistory")
        })
          .catch(error => {
            alert("Error in saving address...")
            history.push("/orderHistory")
          })
      }
      else {
        history.push("/orderHistory")
      }
    })
      .catch((error) => {
        console.log(error)
        alert("An error occured while making creating an Invoice.")
      })
  }


  useEffect(() => {
    setInputErrorMessage("")
    !hideProfileAddressStatus ?
      setAddressTypeQuestion("Want to use new different for this delivery")
      :
      setAddressTypeQuestion("Want to use address from profile")
  }, [hideProfileAddressStatus])

  const handlerToggleAddress = () => {
    hideProfileAddressStatus ?
      setHideProfileAddress(false)
      :
      setHideProfileAddress(true)
  }


  return (
    <div className={classes.mainContainer}>
      <div className={classes.boxWrapper}>
        <h3 className={classes.heading}>CHECK OUT</h3>
      </div>
      <div className={classes.whiteText}>
        Delivery address
      </div>
      <form className={classes.form}>
        <div className={classes.textfieldBlock}>
          <div className={hideProfileAddressStatus == false ? `${classes.formHeading} ` : `${classes.hidden}`}><b >Address:</b> {userDetails.address}</div>
          <div className={classes.formHeading}>
            {addressTypeQuestion} address?

            <Link
              className={classes.answerYes}
              onClick={() => handlerToggleAddress()}>
              Yes
            </Link>
          </div>
          <div className={hideProfileAddressStatus == true ? `undefined` : `${classes.hidden}`}>
            <TextField
              className={classes.textfield}
              autoComplete="off"
              margin="normal"
              label="Enter your full Address here..."
              variant="outlined"
              required
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              InputProps={{
                autoComplete: "off",
              }}
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
            >
              PAY NOW
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
