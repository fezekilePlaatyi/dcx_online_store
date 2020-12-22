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
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import img from "../assets/gold.jpg";
import moment from "moment";
import Button from "@material-ui/core/Button";
import {
    Paper,
} from "@material-ui/core";
import {
    backgroundMain,
} from "../themes/theme-config";
import Basket from '../Basket'

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
}));

function Home() {
    const classes = useStyles();

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
    //   const [orderHistory, setOrderHistory] = React.useState([]);

    const handleExpandClick = (productId: any) => {
        if (productId != "back") {
            var product = products.find((item: any) => item.id == productId);
            setProductDetails(product);
        }
        displayProductDetailsBox(!productDetailsBox);
    };

    const handleAddingProductToBasket = (productDetails: any) => {
        console.log("adding item to basket...")
        checkIfAlreadyAddedOnBasket(productDetails)
            ? console.log("already added...")
            : addProductToBasket((prevArray: any) => [...prevArray, productDetails]);
    };

    const checkIfAlreadyAddedOnBasket = (productDetails: any) => {
        var found: any = !productsOnBasket.find(
            (item: any) => item.id == productDetails.id
        )
            ? false
            : true;

        return found;
    };

    // const displayOrderHistory = async () => {
    //     await firebase
    //         .getInvoices()
    //         .then((data) => {
    //             var invoiceData: any = [];
    //             data.docs.forEach((item) => {
    //                 invoiceData.push(item.data());
    //             });
    //             setOrderHistory(invoiceData);
    //         })
    //         .catch((error) => {
    //             alert(error.toString());
    //         });
    // };

    let products = [
        {
            id: "wdHKuhdwu2ybbxss",
            name: "Gold oz 2nnx",
            type: "gold",
            description: "Some gold blah blah",
            dateAdded: "19 / December / 2020",
            dateModified: "19 / December / 2020",
            price: 200,
        },
        {
            id: "PpadsndHKdjwdwjsk",
            name: "Gold 5029K",
            type: "gold",
            description: "Blah blah blah",
            dateAdded: "20 / December / 2020",
            dateModified: "21 / December / 2020",
            price: 900,
        },
        {
            id: "LkkddjkdHKuhdwsdjdw",
            name: "Silver JKk",
            type: "silver",
            description: "Some silverish stone blah blah",
            dateAdded: "19 / November / 2020",
            dateModified: "12 / December / 2020",
            price: 100,
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




    //   const proceedToPay = async () => {
    //     await firebase
    //       .createInvoice(productsOnBasket)
    //       .then((data) => {
    //         addProductToBasket([]);
    //         alert("Successfuly paid.");
    //       })
    //       .catch((error) => {
    //         alert(error.toString());
    //       });
    //   };

    const Main = () => {
        return (
            <div>
                <Paper className={classes.paper}>
                    <div
                        //   className={classes.productDetails}
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
                                        <b>Price:</b>  R {productDetails.price}
                                    </Typography>
                                    <div>
                                        <Typography component="p">
                                            <b>Details:</b> {productDetails.description}
                                        </Typography>

                                        <Button
                                            onClick={() => handleAddingProductToBasket(productDetails)}
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
                                            <Button onClick={() => handleNavigationClick('basket')}>View Basket</Button>
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
                        <h2>
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
            </div >
        );
    }

    const [navigationOnHome, setSavigationOnHome] = useState('main')
    const handleNavigationClick = (nameOfComponent: any) => {
        console.log("navigating click handler..")
        setSavigationOnHome(nameOfComponent)
    }


    const handleNavigationOnHome = (nameOfComponent: any) => {
        switch (nameOfComponent) {
            case 'main':
                return (
                    <Main />
                );
            case 'basket':
                return (
                    <Basket
                        productsOnBasket={productsOnBasket}
                        addProductToBasket={addProductToBasket}
                        handleNavigationOnHome={handleNavigationOnHome}
                    />
                );
        }
    }

    return (
        <div >
            { handleNavigationOnHome(navigationOnHome)}
        </div>
    );

}
export default Home;
