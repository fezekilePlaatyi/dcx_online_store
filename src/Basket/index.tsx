import app from "../base";
import React, { useEffect, useState } from "react";
import Util from "../Util"
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { ChevronLeft, ShoppingCart } from "@material-ui/icons/";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Delete from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import img from "../assets/gold.jpg";
import moment from "moment";
import { Link, Paper, TextField, Typography, Button } from "@material-ui/core";
import {
  backgroundContrast,
  backgroundMain,
  lightBorders,
  primaryColor,
  primaryText,
} from "../themes/theme-config";
import { useHistory, withRouter } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CheckOut from '../pages/checkOutPage/checkOutPage'

//import NumberFormat from "react-number-format";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  textField: {
    margin: theme.spacing(1),
    minWidth: 20,
    // marginBottom: "25px",
    color: "black",
  },
  productDisplayRoot: {
    display: "flex",
    padding: 30,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 30,
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  productDetails: {
    height: "100vh",
    width: "100vw",
    background: "#e3e3e3",
    display: "none",
  },
  productList: {
    display: "inline-flex",
  },
  paper: {
    padding: 20,
    overflow: "auto",
    backgroundColor: backgroundMain,
    border: "none",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  paperSummary: {
    padding: 20,
    overflow: "auto",
    backgroundColor: backgroundContrast,
    //border: lightBorders,
    display: "flex",
    flexDirection: "column",
    width: "25%",
  },
  paperSummaryHeading: {
    color: primaryColor,
    textTransform: "uppercase",
    marginBottom: 20,
    fontSize: 18,
  },
  paperSummaryTotal: {
    color: primaryText,
    //textTransform: "uppercase",
    marginBottom: 20,
    fontSize: 18,
  },
  tableCell: {
    color: backgroundMain,
  },
  tableDiv: {
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
  },
  paperContetnt: {
    display: "flex",
    flexDirection: "column",
    //justifyContent: "space-between",
  },
  tableRow: {
    "&:hover": {
      backgroundColor: "#808080 !important",
    },
  },
  deleteIcon: {
    cursor: "pointer",
    "&:hover": {
      color: "red !important",
    },
  },
  boxBtn: {
    float: "left",
    color: primaryColor,
    backgroundColor: backgroundContrast,
    borderColor: primaryColor,
    textTransform: "capitalize",
    marginRight: 10,
    fontSize: 14,
  },
  boxBtnBack: {
    float: "left",
    color: primaryColor,
    backgroundColor: backgroundContrast,
    borderColor: primaryColor,
    // textTransform: "capitalize",
    marginBottom: 15,
    fontSize: 14,
  },
  tableCells: {
    fontSize: 14,
  },
  backButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "self-end",
    color: primaryColor,
  },
  tableRowDescription: {
    width: "35%",
    textAlign: 'justify',
    fontSize: 12,
  },
  tableCellsQty: {
    width: "10%",
    fontSize: 14,
  },
  tableRowValue: {
    fontSize: 12,
  },
  productListCardsContainer: {},
}));

const Basket = () => {
  const classes = useStyles()
  const history = useHistory()
  const util = new Util()

  const [basketProductData, setBasketProductData] = useState<any>(util.retrieveBasketProductDataFromLocalStorage())

  const handleDeleteProductFromBasket = (productId: any) => {
    console.log("deleting item...")
    let updatedProductsOnBasket = basketProductData
    updatedProductsOnBasket = updatedProductsOnBasket.filter((item: any) => item.id !== productId)
    setBasketProductData(updatedProductsOnBasket)
  }

  const handleUpdateQuantity = (productId: any, value: any) => {
    console.log("updating item quantity...")
    setBasketProductData((prevData: any) => prevData.map((item: any) => {
      if (item.id === productId) {
        return { ...item, quantity: parseInt(value) };
      }
      return item;
    }))
  }

  const handleNavigation = (componentName: string) => {
    console.log("navigating to", componentName)
    /*
      To:Do Check if Logged in or force to login
    */
    if (util.retrieveBasketProductDataFromLocalStorage().length > 0)
      history.push(componentName)
  }

  const getBasketSubTotal = () => {
    console.log("updatng basket subtotal...")
    let basketSubTotal = 0
    let totalNumberOfItems = 0
    const pricesArray = basketProductData.map((element: any) => element.price);
    const quantityArray = basketProductData.map((element: any) => element.quantity);
    pricesArray.forEach((price: number, index: number) => {
      basketSubTotal += quantityArray[index] * price
      totalNumberOfItems += quantityArray[index]
    })
    return {
      basketSubTotal: basketSubTotal,
      totalNumberOfItems: totalNumberOfItems
    }
  }

  useEffect(() => {
    console.log("Changes detected on basket data...")
    util.storeBasketProductDataToLocalStorage(basketProductData)
    console.log(util.retrieveBasketProductDataFromLocalStorage())
  }, [basketProductData])

  return (
    <div>
      <div className={classes.paperContetnt}>
        <TableContainer component={Paper} className={classes.tableDiv}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableCells} align="left">
                  #
                </TableCell>
                <TableCell className={classes.tableCells} align="left">
                  Name
                </TableCell>
                <TableCell className={classes.tableCells} align="left">
                  Description
                </TableCell>
                <TableCell className={classes.tableCells} align="left">
                  Price (R)
                </TableCell>
                <TableCell className={classes.tableCellsQty} align="left">
                  Quantity
                </TableCell>
                <TableCell className={classes.tableCells} align="left">
                  Total price (R)
                </TableCell>
                <TableCell className={classes.tableCells} align="left">
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {basketProductData.map((item: any) =>
                <TableRow hover className={classes.tableRow} key={item.id}>
                  <TableCell className={classes.tableRowValue}>#</TableCell>
                  <TableCell className={classes.tableRowValue}>{item.name}</TableCell>
                  <TableCell className={classes.tableRowValue}>{item.description}</TableCell>
                  <TableCell className={classes.tableRowValue}>{item.price}</TableCell>
                  <TableCell className={classes.tableRowValue}>
                    <TextField
                      InputProps={{
                        inputProps: { min: 1 },
                        style: { width: "50%" },
                      }}
                      className={classes.textField}
                      type="number"
                      value={item.quantity}
                      onChange={(event) =>
                        handleUpdateQuantity(item.id, event.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell className={classes.tableRowValue}>{parseInt(item.quantity) * item.price}</TableCell>
                  <TableCell className={classes.tableRowValue}>
                    <Delete
                      className={classes.deleteIcon}
                      onClick={() => handleDeleteProductFromBasket(item.id)}
                    />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div >
      <div>
        <Paper className={classes.paperSummary}>
          <div>
            <div className={classes.paperSummaryHeading}>
              Basket summary
            </div>
            <div className={classes.paperSummaryTotal}>
              TOTAL ( {getBasketSubTotal().totalNumberOfItems} of items): total cost R {getBasketSubTotal().basketSubTotal}
            </div>
            <div>
              <Button
                className={classes.boxBtn}
                onClick={() => handleNavigation("/checkout")}
                variant="outlined"
              >
                Checkout
                    </Button>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  )

};
export default Basket;
