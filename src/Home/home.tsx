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
import { backgroundMain } from "../themes/theme-config";
import Basket from "../Basket";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
  hidden: {
    display: 'none',
  }
}));

function Home({ activityStatus }: any) {
  const classes = useStyles();

  console.log("ACTIVITY STATUS:", activityStatus)

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
  const [notificationMessage, setNotificationMessage] = useState("");
  //   const [orderHistory, setOrderHistory] = React.useState([]);

  const handleExpandClick = (productId: any) => {
    if (productId != "back") {
      var product = products.find((item: any) => item.id == productId);
      setProductDetails(product);
    }
    displayProductDetailsBox(!productDetailsBox);
  };

  const handleAddingProductToBasket = (productDetails: any) => {
    if (activityStatus == true) {
      console.log("adding item to basket...");
      checkIfAlreadyAddedOnBasket(productDetails)
        ? console.log("already added...")
        : addProductToBasket((prevArray: any) => [...prevArray, productDetails]);
    } else {
      setNotificationMessage("You need to be logged in to add product to busket.");
      toggleToast();
    }
  };

  const toggleToast = () => {
    var x: any = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }

  const checkIfAlreadyAddedOnBasket = (productDetails: any) => {
    var found: any = !productsOnBasket.find(
      (item: any) => item.id == productDetails.id
    )
      ? false
      : true;

    return found;
  };

  const goToBasketIfNotEmpty = () => {
    if (productsOnBasket.length > 0) handleNavigationClick("basket");
  };

  let products = [
    {
      id: "wdHKuhdwuapdxss",
      name: "100g Fine Gold Minted Medallion",
      type: "gold",
      description: "The 1oz Fine Gold Medallion (24 Carat) will have an unlimited mintage and is linked to the current gold spot price and Rand/Dollar exchange rate which will give investors exposure to the spot gold price and also provide a hedge.",
      dateAdded: "19 / December / 2020",
      dateModified: "19 / December / 2020",
      unitWeight: 100,
      price: 124084,
    },
    {
      id: "DsdusnnshKdjwdwjsk",
      name: "1kg Fine Silver Cast Bar (Flat)",
      type: "silver",
      description: "The complete Wildlife Society's 50th anniversary Silver plated animal medallion set, including the original box, dating to 1976-78.",
      dateAdded: "20 / December / 2020",
      dateModified: "21 / December / 2020",
      unitWeight: 20,
      price: 1751,
    },
    {
      id: "Ppadsndsjuydjwdwjsk",
      name: "1oz Fine Gold Medallion",
      type: "gold",
      description: "The complete Wildlife Society's 50th anniversary gold plated animal medallion set, including the original box, dating to 1976-78.",
      dateAdded: "20 / December / 2020",
      dateModified: "21 / December / 2020",
      unitWeight: 31,
      price: 38751,
    },
    {
      id: "DWHWWEdsksHKdjwdwjsk",
      name: "100g Fine Silver Minted Bar",
      type: "silver",
      description: "The complete Wildlife Society's 50th anniversary Silver plated animal medallion set, including the original box, dating to 1976-78.",
      dateAdded: "20 / December / 2020",
      dateModified: "21 / December / 2020",
      unitWeight: 31,
      price: 28751,
    },
    {
      id: "LkkddjkdHluhdwsdjdw",
      name: "1/10oz Fine Gold Medallion",
      type: "gold",
      description: "The 1oz Fine Gold Medallion (24 Carat) will have an unlimited mintage and is linked to the current gold spot price and Rand/Dollar exchange rate which will give investors exposure to the spot gold price and also provide a hedge.",
      dateAdded: "19 / November / 2020",
      dateModified: "12 / December / 2020",
      unitWeight: 3,
      price: 100,
    },
    {
      id: "DWHWWEssndHKsdsdqejsk",
      name: "1kg Fine Silver Minted Medallion",
      type: "silver",
      description: "The complete Wildlife Society's 50th anniversary Silver plated animal medallion set, including the original box, dating to 1976-78.",
      dateAdded: "20 / December / 2020",
      dateModified: "21 / December / 2020",
      unitWeight: 1,
      price: 1000,
    },
  ];

  let productList: any = [];

  products.forEach((element) => {
    productList.push(
      <Card className={classes.root} style={{ marginRight: 30 }}>
        <CardMedia className={classes.media} image={img} title="plcae holder" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="h3">
            <b>Name: {element.name}</b>
          </Typography>
          <br></br>
          <Typography variant="body2" color="textSecondary" component="h3">
            <b>Price: R {element.price}</b>
          </Typography>{" "}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: productDetailsBox,
            })}
            onClick={() => handleExpandClick(element.id)}
            aria-expanded={productDetailsBox}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  });

  const Main = () => {
    return (
      <div>
        <div id="snackbar">{notificationMessage}</div>
        <Paper className={classes.paper}>
          <div
            className={classes.productDetails}
            style={{ display: productDetailsBox ? "block" : "none" }}
          >
            <IconButton
              onClick={() => handleExpandClick("back")}
              aria-expanded={productDetailsBox}
              aria-label="show more"
            >
              <ChevronLeft /> back
            </IconButton>
            <Card className={classes.productDisplayRoot}>
              <CardMedia
                className={classes.cover}
                image={img}
                title="plcae holder"
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    <b> Name: </b> {productDetails.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Price:</b> R {productDetails.price}
                  </Typography>
                  <div>
                    <Typography component="p">
                      <b>Details:</b> {productDetails.description}
                    </Typography>

                    <Button
                      onClick={() =>
                        handleAddingProductToBasket(productDetails)
                      }
                      style={{
                        display: checkIfAlreadyAddedOnBasket(productDetails)
                          ? "none"
                          : "block",
                      }}
                    >
                      + Add <ShoppingCart />
                    </Button>

                    <Typography
                      component="p"
                      style={{
                        display: checkIfAlreadyAddedOnBasket(productDetails)
                          ? "block"
                          : "none",
                      }}
                    >
                      Added <ShoppingCart /> |{" "}
                      <Button onClick={() => handleNavigationClick("basket")}>
                        View Basket
                      </Button>
                    </Typography>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
          <div
            className={classes.productListCardsContainer}
            style={{ display: productDetailsBox ? "none" : "block" }}
          >
            <h2>Product List(*)</h2>
            <h2 className="pointer" onClick={() => goToBasketIfNotEmpty()}>
              ({productsOnBasket.length}) <ShoppingCart />
            </h2>
            <div className={classes.productList}>{productList}</div>
          </div>

          {/* <h2
              onClick={() => proceedToPay()}
              style={{
                display: productsOnBasketList.length == 0 ? "none" : "block",
              }}
            >
              PAY
            </h2>
            
            <div>
              <h2>History </h2>
              {orderHistory.join(",").toString()}
            </div> */}
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
      case "basket":
        return (
          <Basket
            productsOnBasket={productsOnBasket}
            addProductToBasket={addProductToBasket}
            handleNavigationOnHome={handleNavigationOnHome}
          />
        );
    }
  };

  return <div>{handleNavigationOnHome(navigationOnHome)}</div>;
}
export default Home;
