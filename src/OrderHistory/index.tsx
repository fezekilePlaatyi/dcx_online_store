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
import InvoiceService from '../services/invoice-service'

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


const OrderHistory = () => {

    const classes = useStyles();
    const history = useHistory();
    const [orderHistory, setOrderHistory] = React.useState([]);

    const displayOrderHistory = async () => {
        let invoiceInstance = new InvoiceService()
        await invoiceInstance.getInvoicesByUserId()
            .then((data) => {
                var invoicesData: any = [];
                data.docs.forEach((item: any) => {
                    // invoicesData.push(item.data());
                });
                console.log(invoicesData)
                // setOrderHistory(invoicesData);
            })
            .catch((error) => {
                alert(error.toString());
            });
    };

    // displayOrderHistory()

    return (
        <div>
            <h2>Order History</h2>
            {orderHistory}
        </div>
    );
}
export default OrderHistory;
