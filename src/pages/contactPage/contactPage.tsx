import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  backgroundMain,
  primaryColor,
  backgroundContrast,
  primaryText,
  //  logo,
} from "../../themes/theme-config";
import Paper from "@material-ui/core/Paper";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: 40,
      overflow: "auto",
      backgroundColor: backgroundContrast,
      border: "none",
      display: "flex",
      flexDirection: "column",
      // alignItems: "center",
      width: "100%",
      [theme.breakpoints.down('xs')]: {
        padding: 15,
      },
    },
    heading: {
      margin: "15px 0px",
      color: primaryColor,
      [theme.breakpoints.down('xs')]: {
        fontSize: 22,
      },
    },
    subHeading: {
      [theme.breakpoints.down('xs')]: {
        fontSize: 14,
      },
    },
    whiteText: {
      color: primaryText,
      fontSize: 14,
    },
    contactDetailsPhone: {
      color: primaryText,
      fontSize: 14,
      marginLeft: 15,
    },
    contactDetailsIcon: {
      color: primaryColor,
    },
    contactBlocks: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 30,
      [theme.breakpoints.down('xs')]: {
        flexDirection: "column",
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
        marginBottom: 25,
      },
      // [theme.breakpoints.down('md')]: {
      //   flexDirection: "column",
      // },
      // [theme.breakpoints.down('md')]: {
      //   flexDirection: "row",
      // },
      // [theme.breakpoints.down('lg')]: {
      //   width: "50%",
      // },
    },
    contactBlock: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      [theme.breakpoints.down('xs')]: {
        marginBottom: 25,
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: 25,
      },
    },
    contactDetails: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginTop: 20,
      marginBottom: 5,
      [theme.breakpoints.down('xs')]: {
        marginTop: 10,
      },
      [theme.breakpoints.down('sm')]: {
        marginTop: 10,
      },
    },
  })
);

const Contact = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper}>
        <h2 className={classes.heading}>CONTACT US</h2>
        <div className={classes.whiteText}>
          DCX Bullion strives for only the highest level of service and
          communication with any investor looking to acquire precious metals
        </div>
        <div className={classes.contactBlocks}>
          <div className={classes.contactBlock}>
            <h3 className={classes.subHeading}>GENERAL ENQUIRIES</h3>
            <div className={classes.contactDetails}>
              <div className={classes.contactDetailsIcon}>
                <PhoneInTalkIcon />
              </div>
              <div className={classes.contactDetailsPhone}>
                +27 (0) 62 716 9842
              </div>
            </div>
            <div className={classes.contactDetails}>
              <div className={classes.contactDetailsIcon}>
                <EmailIcon />
              </div>
              <div className={classes.contactDetailsPhone}>
                {" "}
                info@dcxbullion.com
              </div>
            </div>
          </div>
          <div className={classes.contactBlock}>
            <h3 className={classes.subHeading}>DEON REBELLO</h3>
            <div className={classes.contactDetails}>
              <div className={classes.contactDetailsIcon}>
                <PhoneInTalkIcon />
              </div>
              <div className={classes.contactDetailsPhone}>
                +27 (0) 83 255 4341
              </div>
            </div>
            <div className={classes.contactDetails}>
              <div className={classes.contactDetailsIcon}>
                <EmailIcon />
              </div>
              <div className={classes.contactDetailsPhone}>
                deon@dcxbullion.com
              </div>
            </div>
          </div>
          <div className={classes.contactBlock}>
            <h3 className={classes.subHeading}>CHRIS HATTINGH</h3>
            <div className={classes.contactDetails}>
              <div className={classes.contactDetailsIcon}>
                <PhoneInTalkIcon />
              </div>
              <div className={classes.contactDetailsPhone}>
                +27 (0) 83 625 5916
              </div>
            </div>
            <div className={classes.contactDetails}>
              <div className={classes.contactDetailsIcon}>
                <EmailIcon />
              </div>
              <div className={classes.contactDetailsPhone}>
                chris@dcxbullion.com
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Contact;
