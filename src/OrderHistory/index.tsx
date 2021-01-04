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
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Card from "@material-ui/core/Card";

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
  tableRowDescription: {
    width: "35%",
    textAlign: "justify",
    fontSize: 12,
  },
  tableCellsQty: {
    width: "10%",
    fontSize: 14,
  },
  tableRowValue: {
    fontSize: 12,
  },
  tableRowValueName: {
    fontSize: 12,
    width: "30%",
  },
  tableRowValuePrice: {
    fontSize: 12,
    width: "20%",
  },
  tableRowValueQty: {
    fontSize: 12,
    width: "20%",
  },
  tableRowValueDesc: {
    fontSize: 12,
    width: "60%",
    textAlign: "justify",
  },
  tableCellsName: {
    fontSize: 12,
    width: "%",
    textAlign: "justify",
  },
  tableCells: {
    fontSize: 14,
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
  tableCell: {
    color: backgroundMain,
  },
  tableDiv: {
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
  },
  tableDivHeading: {
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
  },
  rootCard: {
    padding: 20,
    overflow: "auto",
    backgroundColor: backgroundMain,
    border: "none",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  tableHeading: {
    // marginBottom: 20,
    marginTop: 40,
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
          invoicesData.push(doc.data().invoiceData);
        });

        invoices.push(
          <TableContainer component={Paper} className={classes.tableDiv}>
            <Table aria-label="simple table">
              <TableBody></TableBody>
            </Table>
          </TableContainer>

          // <thead>
          //   <tr>
          //     <th>Name</th>
          //     <th>Description</th>
          //     <th>Price</th>
          //     <th>Quantity</th>
          //   </tr>
          // </thead>
        );
        setOrderHistory(invoicesData);
      })
      .catch((error) => {
        alert(error.toString());
      });
  };

  invoicesData.forEach(addInvoiceToAccordingList);

  function addInvoiceToAccordingList(element: any, index: any, array: any) {
    let lineItems: any = [];
    let itemLength = element.length;
    let counter = 0;
    const now = Date.now();

    element.forEach((item: any) => {
      counter++;
      lineItems.push(
        <TableBody component={Paper} className={classes.tableDiv}>
          {/* <Table aria-label="simple table"> */}

          <TableRow hover className={classes.tableRow} key={element.id}>
            <TableCell className={classes.tableRowValueName}>
              {item.name}
            </TableCell>
            <TableCell className={classes.tableRowValueDesc}>
              {item.description}
            </TableCell>
            <TableCell className={classes.tableRowValuePrice}>
              {item.price}
            </TableCell>
            <TableCell className={classes.tableRowValueQty}>
              {item.quantity}
            </TableCell>
            <TableCell className={classes.tableRowValue}>{now}</TableCell>
          </TableRow>
          {/* <tr style={{ color: "white", fontSize: "102%" }}>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
          <td>{item.quantity}<br></br></td>
        </tr > */}
          {/* </Table> */}
        </TableBody>
      );
      if (counter == itemLength) {
        lineItems
          .push

          /* <td>111111111111111111111111111111111111111111111111</td>
            <td>111111111111111111111111111111111111111111111111</td>
            <td>111111111111111111111111111111111111111111111111</td>
            <td>111111111111111111111111111111111111111111111111</td> *
           </tr> */
          ();
      }
    });

    invoices.push(lineItems);
    lineItems.unshift(
      <div className={classes.tableHeading}>
        {/* <TableContainer component={Paper} className={classes.tableDivHeading}>
        <Table aria-label="simple table"> */}
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCellsName} align="left">
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
            <TableCell className={classes.tableCellsQty} align="left">
              Date
            </TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>{invoices}</TableBody> */}
        {/* </Table>
      </TableContainer> */}
        {/* <div>
        <br />
        <br />
      </div> */}
      </div>
    );

    // for (const [key, value] of Object.entries(element)) {
    //   var invoice: any = value;
    //   invoices.push(
    //     <div className="panel panel-default">
    //       <div className="panel-heading">
    //         <h4 className="panel-title">
    //           <a
    //             data-toggle="collapse"
    //             data-parent="#accordion"
    //             href="#collapse1"
    //           >
    //             <b>{invoice[0].name}</b>
    //           </a>
    //         </h4>
    //       </div>
    //       <div id="collapse1" className="panel-collapse collapse in">
    //         <div className="panel-body">
    //           <p className={classes.orgerDetails}>
    //             <b>Description:</b> {invoice[0].description}
    //           </p>
    //           <p className={classes.orgerDetails}>
    //             <b>Price:</b> R {invoice[0].price}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // }
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
