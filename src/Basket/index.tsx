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
import { Link, Paper, TextField, Typography } from "@material-ui/core";
import { backgroundContrast, backgroundMain } from "../themes/theme-config";
import { useHistory, withRouter } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
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
    border: "none",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  tableCell: {
    color: backgroundMain,
  },
  tableDiv: {
    width: "80%",
  },
  paperContetnt: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
    var index: number = productsOnBasket.findIndex(
      (product: any) => product.id === productId
    );
    if (index !== -1) productsOnBasket[index].quantity = value;
    console.log(productsOnBasket);
  };

  //   function ccyFormat(num: number) {
  //     return `${num.toFixed(2)}`;
  // }

  let productsOnBasket = props.productsOnBasket;
  let addProductToBasket = props.addProductToBasket;
  let handleNavigationOnHome = props.handleNavigationOnHome;

  let productsOnBasketList: any = [];

  console.log(productsOnBasket)

  productsOnBasket.forEach(
    (element: {
      description: any;
      name: any;
      price: any;
      quantity: any;
      id: any;
      totalPrice: any
    }) => {

      productsOnBasketList.push(
        <TableRow key={element.id}>

          <TableCell>{+1}</TableCell>
          <TableCell>{element.name}</TableCell>
          <TableCell>{element.description}</TableCell>
          <TableCell>{element.price}</TableCell>
          {/* <TableCell>
            <NumberFormat thousandSeparator={true} value={element.price} />
          </TableCell> */}
          <TableCell>
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
          <TableCell>{element.totalPrice}</TableCell>
          <TableCell>
            <Delete onClick={() => handleDeleteProductFromBasket(element.id)} />
          </TableCell>
        </TableRow>
      );
    }
  );

  function test() {
    handleNavigationOnHome("main");
  }

  return (
    <div>
      <Paper className={classes.paper}>
        <h2 onClick={() => test()}>BASKET </h2>
        <div className={classes.paperContetnt}>
          <TableContainer component={Paper} className={classes.tableDiv}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">#</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Description</TableCell>
                  <TableCell align="left">Price(R)</TableCell>
                  <TableCell align="left">Quantity</TableCell>
                  <TableCell align="left">Total price(R)</TableCell>
                  <TableCell align="left">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{productsOnBasketList}</TableBody>
            </Table>
          </TableContainer>

          <div>
            <Paper className={classes.paperSummary}>
              <div>
                <div>Basket summary</div>
                <div>TOTAL ( # of items): total cost </div>
              </div>
            </Paper>
          </div>
        </div>

        {/* <div className="table table-striped">
        <thead>
          <tr>
            <th >Name</th>
            <th>Description</th>
            <th>Price(R)</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className={classes.tableCell}>
       
        </tbody>
      </div> */}
      </Paper>
    </div>
  );
};
export default Basket;
