import app from "../base";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  ChevronLeft,
  ShoppingCart,
} from "@material-ui/icons/";
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
import {
  Link,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  backgroundMain,
} from "../themes/theme-config";
import { useHistory, withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  textField: {
    margin: theme.spacing(1),
    minWidth: 20,
    marginBottom: "25px",
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

  let productsOnBasket = props.productsOnBasket
  let addProductToBasket = props.addProductToBasket
  let handleNavigationOnHome = props.handleNavigationOnHome

  let productsOnBasketList: any = [];

  productsOnBasket.forEach(
    (element: {
      description: any;
      name: React.ReactNode;
      price: React.ReactNode;
      id: any;
    }) => {
      productsOnBasketList.push(
        <tr key={element.id}>
          <td>{element.name}</td>
          <td>{element.description}</td>
          <td>R {element.price}</td>
          <td>< TextField
            InputProps={{
              inputProps: { min: 1 },
            }}
            className={classes.textField}
            type="number"
            defaultValue={1}
            onChange={(event) =>
              handleUpdateQuantity(element.id, event.target.value)
            }
          /></td>
          <td><Delete onClick={() => handleDeleteProductFromBasket(element.id)} /></td>
        </tr>
      );
    }
  );

  function test() {
    handleNavigationOnHome('main')
  }

  return (
    <div>
      <h2 onClick={() => test()}>BASKET </h2>
      <div className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price(zars)</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {productsOnBasketList}
        </tbody>
      </div>
    </div>
  );
}
export default Basket;
