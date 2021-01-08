import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ChevronLeft, ShoppingCart } from "@material-ui/icons/";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import img from "../assets/gold.jpg";
import Button from "@material-ui/core/Button";
import { backgroundContrast, backgroundMain, primaryText } from "../themes/theme-config";
import {
    primaryColor,
} from "../themes/theme-config";
import { useHistory } from "react-router-dom";
import Util from "../Util"

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        width: "40%",
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
    },
    shopCategoryButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "37%",
        marginTop: 20,
    },
    shopCategoryHeadingMain: {
        color: primaryText,
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
        fontSize: 14,
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
        cursor: 'pointer',
        color: '#CC9933',
    }
}));

const DisplayMoreProductDetails = (props: any) => {
    const classes = useStyles();
    const history = useHistory();
    const util = new Util()

    let productDetails = props.location.state.selectedProduct
    console.log(productDetails)
    const [productsOnBasket, addProductToBasket] = useState<any>(util.retrieveBasketProductDataFromLocalStorage())

    useEffect(() => {
        util.storeBasketProductDataToLocalStorage(productsOnBasket)
        console.log(util.retrieveBasketProductDataFromLocalStorage())
        setProductIsAdded(checkIfAlreadyAddedOnBasket(productDetails))
    }, [productsOnBasket])


    const handleNavigation = (nameOfTheComponent: string) => {
        history.push(nameOfTheComponent)
    }

    const handleAddingProductToBasket = (productDetails: any) => {
        checkIfAlreadyAddedOnBasket(productDetails)
            ? console.log("already added...")
            : addProductToBasket((prevArray: any) => [
                ...prevArray,
                productDetails,
            ]);
    }

    const checkIfAlreadyAddedOnBasket = (productDetails: any) => {
        if (productsOnBasket.length > 0) {
            console.log(productsOnBasket)
            var found: any = !productsOnBasket.find(
                (item: any) => item.id == productDetails.id
            )
                ? false
                : true

            return found;
        } else {
            return false
        }
    };

    const [productIsAdded, setProductIsAdded] = useState<any>(checkIfAlreadyAddedOnBasket(productDetails))

    return (
        <div>
            <IconButton
                onClick={() =>
                    handleNavigation("/")
                }
                aria-label="show more">
                <ChevronLeft />
                back
            </IconButton>
            <Card className={classes.productDisplayRoot}>
                <CardMedia
                    className={classes.cover}
                    image={productDetails.imgUrl}
                    title="Image" />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography
                            className={classes.contentDetailsName}
                            component="h5"
                            variant="h5"
                        >
                            <b> Name: </b> {productDetails.name}
                        </Typography>
                        <Typography
                            className={classes.contentDetails}
                            variant="subtitle1"
                            color="textSecondary"
                        >
                            <b>Price:</b> R {productDetails.price}
                        </Typography>
                        <div>
                            <Typography
                                className={classes.contentDetails}
                                component="p"
                            >
                                <b>Details:</b> {productDetails.description}
                            </Typography>
                            <Button
                                variant="outlined"
                                className={classes.boxBtnAddMain}
                                onClick={() =>
                                    handleAddingProductToBasket(productDetails)
                                }
                                style={{
                                    display: productIsAdded
                                        ? "none"
                                        : "flex",
                                }}
                            >
                                + Add
                                <ShoppingCart />
                            </Button>
                            <Typography
                                component="p"
                                style={{
                                    display: productIsAdded
                                        ? "flex"
                                        : "none",
                                    color: primaryText,
                                    alignItems: "center",
                                    fontSize: 14,
                                }}
                            >
                                Added
                                <ShoppingCart />
                                {" "}
                                <div className={classes.divider}>|</div>
                                <Button
                                    className={classes.boxBtnAdd}
                                    onClick={() => handleNavigation("/basket")}
                                >
                                    View Basket
                                </Button>
                            </Typography>
                        </div>
                    </CardContent>
                </div>
            </Card>
        </div>
    )
}

export default DisplayMoreProductDetails