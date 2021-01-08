import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { ChevronLeft, ShoppingCart } from "@material-ui/icons/";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import img from "../assets/gold.jpg";
import moment from "moment";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import { backgroundMain, primaryText } from "../themes/theme-config";
import Basket from "../Basket";
import Util from "../Util";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  // backgroundMain,
  primaryColor,
  backgroundContrast,
  //primaryText,
} from "../themes/theme-config";
import app from "../base";
import DisplayMoreProductDetails from "../DisplayMoreProductDetails";
import { useHistory } from "react-router";
import { css } from "glamor";
import NumberFormat from "react-number-format";
import { EndOfLineState } from "typescript";

const Zoom = cssTransition({
  enter: "zoomIn",
  exit: "zoomOut",
});

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: "40%",
    marginRight: 30,
    [theme.breakpoints.down('xs')]: {
      width: "100%",
      marginBottom: 20,
      marginRight: 0,
    },
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      marginBottom: 20,
      marginRight: 0,
    },
  },
  textField: {
    margin: theme.spacing(1),
    minWidth: 20,
    marginBottom: "25px",
    color: "black",
    background: "grey",
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
    width: "25%",
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
    backgroundColor: backgroundContrast,
    borderColor: primaryColor,
    color: primaryColor,
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
    // height: "100vh",
    // width: "100vw",
    //   background: "#e3e3e3",
    display: "none",
  },
  productList: {
    display: "inline-flex",
    [theme.breakpoints.down('xs')]: {
      display: "flex",
      flexDirection: 'column',
      alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      display: "flex",
      flexDirection: 'column',
      alignItems: 'center',
    },
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
  boxBtn: {
    float: "left",
    backgroundColor: backgroundContrast,
    borderColor: primaryColor,
    color: primaryColor,
    width: "30%",
  },
  boxBtnAddMain: {
    //float: "left",
    backgroundColor: backgroundContrast,
    borderColor: primaryColor,
    color: primaryColor,
    // width: "20%",
    // marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxBtnAdd: {
    //float: "left",
    backgroundColor: backgroundContrast,
    borderColor: primaryColor,
    color: primaryText,
    // width: "20%",
    // marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  shopCategory: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 40,
  },
  shopCategoryHeading: {
    display: "flex",
    //flexDirection: 'column',
    justifyContent: "space-between",
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  shopCategoryButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "37%",
    marginTop: 20,
    [theme.breakpoints.down('xs')]: {
      width: "100%",
    },
    [theme.breakpoints.down('sm')]: {
      width: "100%",
    },
  },
  shopCategoryHeadingMain: {
    color: primaryText,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  heading: {
    margin: "15px 0px",
    color: primaryColor,
  },
  pointer: {
    backgroundColor: backgroundContrast,
    borderColor: primaryColor,
    color: primaryColor,
  },
  cart: {
    display: "flex",
    alignItems: "center",
    fontSize: 18,
  },
  cardDetails: {
    fontSize: 20,
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
  contentDetailsName: {
    marginBottom: 15,
  },
  contentDetails: {
    marginBottom: 10,
    fontSize: 14,
  },
  divider: {
    marginRight: 15,
    marginLeft: 15,
  },
  productListCardsContainer: {},
  hidden: {
    display: "none",
  },
  cursorPointer: {
    cursor: "pointer",
    color: "#CC9933",
  },
  toastSuccess: {
    backgroundColor: "yellow !important",
  },
  costValue: {
    // marginLeft: "10px",
    color: primaryText,
  },
}));

function Home({ activityStatus }: any) {
  const classes = useStyles();
  const history = useHistory();
  const util = new Util();

  var defaultProduct: any = {
    id: "",
    name: "",
    type: "",
    description: "",
    dateAdded: moment(new Date()),
    dateModified: moment(new Date()),
    price: 0,
  };

  const [productsOnBasket, addProductToBasket] = React.useState<any>([]);
  const [productDetailsBox, displayProductDetailsBox] = React.useState(false);
  const [productDetails, setProductDetails] = React.useState<any>(
    defaultProduct
  );
  const [selectedProduct, setSelectedProduct] = React.useState<any>({});
  const [notificationMessage, setNotificationMessage] = useState("");
  const [productTypeToDisplay, setProductListCategory] = useState("all");
  const [productList, setProductList] = React.useState<any>([]);

  const handleExpandClick = (productId: any) => {
    var product = products.find((item: any) => item.id == productId);
    history.push({
      pathname: "/displayMoreProductDetails",
      state: {
        selectedProduct: product,
      },
    });
  };

  const updateProductListCategory = (productType: string) => {
    setProductListCategory(productType);
  };

  const goToBasketIfNotEmpty = () => {

    if (util.retrieveBasketProductDataFromLocalStorage().length > 0)
      history.push("/basket");
    else {
      notify("You basket is empty, add Items to checkout.", "none")
    }
  }

  const notify = (message: string, redirectTo: string) => {
    toast(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
      onClose: () => {
        if (redirectTo != "none")
          history.push(redirectTo)
        else
          return;
      }
    });
  }

  let products = [
    {
      id: "Ppadsndsjuydjwdwjsk",
      name: "1oz Fine Gold Medallion",
      type: "gold",
      description:
        "The complete Wildlife Society's 50th anniversary gold plated animal medallion set, including the original box, dating to 1976-78.",
      dateAdded: "20 / December / 2020",
      dateModified: "21 / December / 2020",
      unitWeight: 31,
      quantity: 1,
      price: 38751,
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/online-store-e8ed0.appspot.com/o/dcx-online-store%2Fgold.jpg?alt=media&token=4b63446a-7f63-4e21-a68a-f28aba76a37e"
    },
    {
      id: "DWHWWEdsksHKdjwdwjsk",
      name: "100g Fine Silver Minted Bar",
      type: "silver",
      description:
        "The complete Wildlife Society's 50th anniversary Silver plated animal medallion set, including the original box, dating to 1976-78.",
      dateAdded: "20 / December / 2020",
      dateModified: "21 / December / 2020",
      unitWeight: 31,
      quantity: 1,
      price: 28751,
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/online-store-e8ed0.appspot.com/o/dcx-online-store%2F3.jfif?alt=media&token=f6c56140-699f-4c30-bf03-e0f4434404a9"
    },
    {
      id: "LkkddjkdHluhdwsdjdw",
      name: "1/10oz Fine Gold Medallion",
      type: "gold",
      description:
        "The 1oz Fine Gold Medallion (24 Carat) will have an unlimited mintage and is linked to the current gold spot price and Rand/Dollar exchange rate which will give investors exposure to the spot gold price and also provide a hedge.",
      dateAdded: "19 / November / 2020",
      dateModified: "12 / December / 2020",
      unitWeight: 3,
      quantity: 1,
      price: 100,
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/online-store-e8ed0.appspot.com/o/dcx-online-store%2Fheadline_GOLD_13.jfif?alt=media&token=62978e07-970a-4073-9b08-e08c56d49d72"
    },
    {
      id: "DWHWWEssndHKsdsdqejsk",
      name: "1kg Fine Silver Minted Medallion",
      type: "silver",
      description:
        "The complete Wildlife Society's 50th anniversary Silver plated animal medallion set, including the original box, dating to 1976-78.",
      dateAdded: "20 / December / 2020",
      dateModified: "21 / December / 2020",
      unitWeight: 1,
      quantity: 1,
      price: 1000,
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/online-store-e8ed0.appspot.com/o/dcx-online-store%2Fdownload%20(1).jfif?alt=media&token=2f466880-5adb-4da4-b4c3-105c2cf438d3"
    },
    {
      id: "wdHKuhdwuapdxss",
      name: "100g Fine Gold Minted Medallion",
      type: "gold",
      description:
        "The 1oz Fine Gold Medallion (24 Carat) will have an unlimited mintage and is linked to the current gold spot price and Rand/Dollar exchange rate which will give investors exposure to the spot gold price and also provide a hedge.",
      dateAdded: "19 / December / 2020",
      dateModified: "19 / December / 2020",
      unitWeight: 100,
      quantity: 1,
      price: 124084,
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/online-store-e8ed0.appspot.com/o/dcx-online-store%2Fdownload.jfif?alt=media&token=1e4301af-a89f-40ff-bf4d-fc57cbfdf72d"
    }
  ];

  const displayProductList = (productType: string) => {
    let updateProductByCategory: any = [];
    productList.splice(0, productList.length);
    if (productType == "all") {
      updateUIOnProductCatergoryChange(products);
    } else {
      updateProductByCategory = products.filter(function (element) {
        return element.type == productType;
      });
      updateUIOnProductCatergoryChange(updateProductByCategory);
    }
  };
  const updateUIOnProductCatergoryChange = (updateProductByCategory: any) => {
    updateProductByCategory.forEach((element: any) => {
      productList.push(
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={element.imgUrl}
          />
          <CardContent>
            <Typography
              className={classes.cardDetails}
              variant="body2"
              color="textSecondary"
              component="h3"
            >
              {element.name}
            </Typography>
            <br></br>
            <Typography
              className={classes.cardDetails}
              variant="body2"
              color="textSecondary"
              component="h3"
            >
              Price: R  {/* {element.price} */}
              <NumberFormat
                className={classes.costValue}
                thousandSeparator={true}
                displayType={"text"}
                value={element.price}
              />
            </Typography>{" "}
          </CardContent>
          <CardActions disableSpacing>
            <Button
              variant="outlined"
              className={clsx(classes.expand, {
                [classes.expandOpen]: productDetailsBox,
              })}
              onClick={() => handleExpandClick(element.id)}
              aria-expanded={productDetailsBox}
              aria-label="Show more"
            >
              {" "}
              Details
              <ExpandMoreIcon />
            </Button>
          </CardActions>
        </Card>
      );
    });
  };

  displayProductList(productTypeToDisplay);

  const Main = () => {
    return (
      <div>
        <ToastContainer />
        <Paper className={classes.paper}>
          <div
            className={classes.productListCardsContainer}
            style={{ display: productDetailsBox ? "none" : "block" }}
          >
            <div className={classes.shopCategory}>
              <h3 className={classes.heading}>INVEST IN YOUR FUTURE NOW!</h3>
              <div className={classes.shopCategoryHeading}>
                <h3 className={classes.shopCategoryHeadingMain}>
                  Shop by category
                </h3>
                <Button
                  variant="outlined"
                  className={classes.pointer}
                  onClick={() => goToBasketIfNotEmpty()}
                >
                  <div className={classes.cart}>
                    {" "}
                    ({
                      util.retrieveBasketProductDataFromLocalStorage().length
                    }) <ShoppingCart />
                  </div>
                </Button>
              </div>
              <div className={classes.shopCategoryButtons}>
                <Button
                  className={classes.boxBtn}
                  variant="outlined"
                  onClick={(evet) => updateProductListCategory("gold")}
                >
                  GOLD
                </Button>
                <Button
                  className={classes.boxBtn}
                  variant="outlined"
                  onClick={(event) => updateProductListCategory("silver")}
                >
                  SILVER
                </Button>
                <Button
                  className={classes.boxBtn}
                  variant="outlined"
                  onClick={(event) => updateProductListCategory("all")}
                >
                  ALL
                </Button>
              </div>
            </div>
            <div className={classes.productList}>{productList}</div>
          </div>
        </Paper>
      </div>
    );
  };

  const [navigationOnHome, setSavigationOnHome] = useState("main");

  const handleNavigationClick = (nameOfComponent: any) => {
    console.log("navigating click handler..");
    setSavigationOnHome(nameOfComponent);
  };

  const handleNavigationOnHome = (nameOfComponent: any) => {
    switch (nameOfComponent) {
      case "main":
        return <Main />;

      case "displayMoreProductDetails": {
        return <DisplayMoreProductDetails productDetails={selectedProduct} />;
      }
    }
  };

  const logout = async () => {
    await app.auth().signOut();
  };
  var user = app.auth().currentUser;

  if (user) {
    if (user.emailVerified) {
      return <div>{handleNavigationOnHome(navigationOnHome)}</div>;
    } else {
      return (
        <Paper className={classes.paper}>
          <div>
            <h2>Please verify email and login again!</h2>
            <h4>
              You can{" "}
              <span onClick={logout} className={classes.cursorPointer}>
                Logout
              </span>
            </h4>
          </div>
        </Paper>
      );
    }
  } else {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default Home;
