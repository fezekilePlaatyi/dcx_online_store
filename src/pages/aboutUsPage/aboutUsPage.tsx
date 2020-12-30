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
import StarsIcon from "@material-ui/icons/Stars";

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
    },
    heading: {
      margin: "15px 0px",
      color: primaryColor,
    },
    whiteText: {
      color: primaryText,
      fontSize: 14,
      lineHeight: "30px",
      textAlign: "justify",
    },
    aboutHeading: {
      color: primaryColor,
      fontSize: 14,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
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
    },
    contactBlock: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    contactDetails: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginTop: 20,
      marginBottom: 5,
    },
    h4: {
      marginLeft: 15,
    },
    aboutBlock: {
      width: '55%',
      marginBottom: 20,
    }
  })
);

const About = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper}>
        <h2 className={classes.heading}>ABOUT US</h2>
        <div className={classes.whiteText}>
          DCX Bullion (Pty) Ltd was started by Chris Hattingh and Deon Rebello
          out of passion to help people and show them a way to protect and
          growth their wealth through God’s commodities – GOLD and SILVER. Chris
          has been in Sales and Marketing for the last 25 years. Starting in the
          security industry and then CEO of an International toy company for the
          last 9 years with 2 patents in his name. Similarly, Deon has also been
          in Sales and Marketing for the last 20 years. Starting in a successful
          family business in the manufacturing industry and then joint CEO for a
          firm in the mining industry. Having both lived through the recession
          in 2008, watching people losing their jobs and their homes, they
          anticipated the next financial crash already a year ago. They have
          both been in the commodity industry for the last year, specialising
          mainly in silver as an investment. They recently joined forces and
          hence created DCX Bullion to educate people and get gold and silver
          into the hands of as many South Africans as possible to protect
          themselves for what is coming.
        </div>
        <div>
          <h3>WHY CHOOSE US</h3>
          <div className={classes.aboutBlock}>
            <div className={classes.aboutHeading}>
              <div>
                <StarsIcon />
              </div>
              <h4 className={classes.h4}>ONE STOP SHOP</h4>
            </div>
            <div className={classes.whiteText}>
              Most people have never been exposed to or purchased commodities
              such as Gold and Silver. There is an entry point and an exit
              point. If you are not experienced with the process, you could get
              cheated out of its full potential. At DCX, we are a “one stop
              shop” offering the following to our clients: Daily pricing,
              national delivery, vaulting options and purchasing of metals.
            </div>
          </div>
          <div className={classes.aboutBlock}>
            <div className={classes.aboutHeading}>
              <div>
                <StarsIcon />
              </div>
              <h4 className={classes.h4}>SECURE YOUR CAPITAL</h4>
            </div>
            <div className={classes.whiteText}>
              In these financially uncertain times, investment in tangible
              silver is a safe way of protecting your capital. For many people
              this is a comforting thought, as precious metals will always
              retain their value, even in times of inflation. We will gladly
              provide you with thorough and personal advice about investing in
              silver in the form of: Coins, Medallions, Bars.
            </div>
          </div>
          <div className={classes.aboutBlock}>
            <div className={classes.aboutHeading}>
              <div>
                <StarsIcon />
              </div>
              <h4 className={classes.h4}>BUY & INVEST IN YOUR FUTURE NOW!</h4>
            </div>
            <div className={classes.whiteText}>
              Unlike gold, silver holds important value in the industrial world.
              Investors not only see silver as a monetary metal but are also
              very interested in its industrial possibilities. The shortages of
              silver on the world market has led to a growing interest in this
              precious metal as more people are discovering the benefits of
              investing in silver. It is therefore advisable to act quickly in
              order to take full advantage of this increasingly popular
              precious/industrial metal. Silver is still relatively inexpensive
              to buy, so anyone investing at this time will be investing a great
              and valuable commodity.
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default About;
