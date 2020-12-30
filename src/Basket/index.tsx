import app from "../base";
import React, { useEffect, useState } from "react";
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

const Basket = (props: any) => {
  const classes = useStyles();
  const history = useHistory();

  const handleDeleteProductFromBasket = (productId: any) => {
    console.log("deleting...");
    addProductToBasket(
      productsOnBasket.filter((item: any) => item.id !== productId)
    );
  };

  const handleUpdateQuantity = (productId: any, value: any) => {
    console.log("updating quantity..");
    let test: any = productsOnBasket;

    var index: number = productsOnBasket.findIndex(
      (product: any) => product.id === productId
    );

    if (index !== -1) {
      productsOnBasket[index].quantity = parseInt(value);
      var totalPriceId: any = "totalPrice_" + productId;
      var x: any = document.getElementById(totalPriceId);
      x.innerHTML = parseInt(value) * productsOnBasket[index].price;
    }
    updateUIOnProductChange(productsOnBasket)
  };

  let productsOnBasket = props.productsOnBasket.map((obj: any) => ({
    ...obj,
    quantity: 1,
  }));
  let addProductToBasket = props.addProductToBasket;
  let handleNavigationOnHome = props.handleNavigationOnHome;
  let handleNavigationClick = props.handleNavigationClick;
  const [navigationOnBasket, setNavigationOnBasket] = useState("basket");
  const [subTotalPrice, setSubTotalPrice] = useState(0);

  let productsOnBasketList: any = [];


  const updateUIOnProductChange = (productsOnBasket: any) => {
    console.log(productsOnBasket);

    let subTotalPrice: any = 0;
    let counter: any = 0;

    productsOnBasket.forEach(
      (element: {
        description: any;
        name: any;
        price: any;
        quantity: any;
        id: any;
      }) => {

        let totalPrice = element.price * parseInt(element.quantity);
        var totalPriceId: any = "totalPrice_" + element.id;
        subTotalPrice = subTotalPrice + totalPrice;
        counter++

        productsOnBasketList.push(
          <TableRow hover className={classes.tableRow} key={element.id}>
            <TableCell className={classes.tableRowValue}></TableCell>
            <TableCell className={classes.tableRowValue}>{element.name}</TableCell>
            <TableCell className={classes.tableRowDescription}>
              {element.description}
            </TableCell>
            <TableCell className={classes.tableRowValue}>{totalPrice}</TableCell>
            {/* <TableCell>
            <NumberFormat thousandSeparator={true} value={element.price} />
          </TableCell> */}
            <TableCell className={classes.tableRowValue}>
              <TextField
                InputProps={{
                  inputProps: { min: 1 },
                  style: { width: "50%" },
                }}
                className={classes.textField}
                type="number"
                defaultValue={1}
                onChange={(event) =>
                  handleUpdateQuantity(element.id, event.target.value)
                }
              />
            </TableCell>
            <TableCell className={classes.tableRowValue} id={totalPriceId}>{parseInt(element.price)}</TableCell>
            <TableCell className={classes.tableRowValue}>
              <Delete
                className={classes.deleteIcon}
                onClick={() => handleDeleteProductFromBasket(element.id)}
              />
            </TableCell>
          </TableRow>
        );

        if (counter == productsOnBasket.length) {
          var subTotalPriceId: any = "subTotalPrice";
          var x: any = document.getElementById(subTotalPriceId);
          if (x !== null)
            x.innerHTML = subTotalPrice;
        }
      }
    );
  };

  function handleNavigateBackToHomePage() {
    handleNavigationClick("main");
    handleNavigationOnHome("main");
  }

  updateUIOnProductChange(productsOnBasket);

  const Basket = () => {
    return (
      <div>
        <Paper className={classes.paper}>
          <h3 className={classes.backButton}>
            <Button
              className={classes.boxBtnBack}
              variant="outlined"
              onClick={() => handleNavigateBackToHomePage()}
            >
              <ChevronLeft /> back
          </Button>
          BASKET
        </h3>
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
                <TableBody>{productsOnBasketList}</TableBody>
              </Table>
            </TableContainer>

            <div>
              <Paper className={classes.paperSummary}>
                <div>
                  <div className={classes.paperSummaryHeading}>
                    Basket summary
                </div>
                  <div className={classes.paperSummaryTotal}>
                    TOTAL ( {productsOnBasketList.length} of items): total cost R <span id="subTotalPrice">.</span>
                  </div>
                  <div>
                    <Button
                      className={classes.boxBtn}
                      onClick={() => handleNavigationClickOnBasket("checkout")}
                      variant="outlined"
                    >
                      Checkout
                      </Button>
                  </div>
                </div>
              </Paper>
            </div>
          </div>
        </Paper>
      </div>
    );
  }

  const handleNavigationClickOnBasket = (nameOfComponent: any) => {
    console.log("navigating click handler..");
    setNavigationOnBasket(nameOfComponent);
  };

  const handleNavigationOnBasket = (nameOfComponent: any) => {
    switch (nameOfComponent) {
      case "checkout":
        return <CheckOut productsOnBasket={productsOnBasket} />;
      case "basket":
        return <Basket />;
    }
  };

  return <div>{handleNavigationOnBasket(navigationOnBasket)}</div>;
};
export default Basket;
