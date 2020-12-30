import app from "../base";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { ChevronLeft, ShoppingCart } from "@material-ui/icons/";
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
import {
  backgroundContrast,
  backgroundMain,
  primaryColor,
} from "../themes/theme-config";
import { useHistory, withRouter } from "react-router-dom";
import InvoiceService from "../services/invoice-service";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    color: "black",
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
  orgerDetails: {
    fontSize: 14,
  },
  h3: {
    marginBottom: 30,
  },
  productListCardsContainer: {},
}));

const OrderHistory = () => {
  const classes = useStyles();
  const history = useHistory();
  const [orderHistory, setOrderHistory] = React.useState<any>([]);
  const [invoicesData, setInvoiceData] = useState<any>([]);
  let invoices: any = [];

  const displayOrderHistory = async () => {
    let invoiceInstance = new InvoiceService();
    await invoiceInstance
      .getInvoicesByUserId()
      .then((data) => {
        invoicesData.splice(0, invoicesData.length);
        data.forEach((doc: any) => {
          invoicesData.push(doc.data());
        });
        setOrderHistory(invoicesData);
      })
      .catch((error) => {
        alert(error.toString());
      });
  };

  invoicesData.forEach(addInvoiceToAccordingList);

  function addInvoiceToAccordingList(element: any, index: any, array: any) {
    for (const [key, value] of Object.entries(element)) {
      var invoice: any = value;
      invoices.push(
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapse1"
              >
                <b>{invoice[0].name}</b>
              </a>
            </h4>
          </div>
          <div id="collapse1" className="panel-collapse collapse in">
            <div className="panel-body">
              <p className={classes.orgerDetails}>
                <b>Description:</b> {invoice[0].description}
              </p>
              <p className={classes.orgerDetails}>
                <b>Price:</b> R {invoice[0].price}
              </p>
            </div>
          </div>
        </div>
      );
    }
  }

  displayOrderHistory();

  return (
    <div>
      <Paper className={classes.paper}>
        <h3 className={classes.h3} style={{ color: primaryColor }}>
          Order History ({invoices.length})
        </h3>
        <div style={{ color: backgroundContrast }}>{invoices}</div>
      </Paper>
    </div>
  );
};
export default OrderHistory;
