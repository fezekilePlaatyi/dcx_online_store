import React from "react";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
//import DashboardIcon from "@material-ui/icons/Dashboard";
import StoreIcon from "@material-ui/icons/Store";
import {
  backgroundMain,
  logo,
  backgroundContrast,
  primaryColor,
  primaryText,
} from "../../themes/theme-config";
import { Button } from "@material-ui/core";
import { useHistory, useLocation } from "react-router";
import app from "../../base";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import InfoIcon from "@material-ui/icons/Info";
// import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu";
//import { useMediaQuery } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      backgroundColor: backgroundContrast,
      flex: 1,
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: backgroundContrast,
    },
    logoHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
      // [theme.breakpoints.down('sm')]: {
      //   display: "none",
      // },
    },
    logoContainer: {
      marginRight: "20px",
    },
    listItemText: {
      color: primaryText,
    },
    icon: {
      color: primaryColor,
    },
    boxBtn: {
      float: "left",
      color: primaryColor,
      backgroundColor: backgroundContrast,
      borderColor: primaryColor,
      textTransform: "capitalize",
      marginRight: 5,
      [theme.breakpoints.down("xs")]: {
        fontSize: 8,
      },
    },
    boxBtnSignOut: {
      float: "left",
      color: primaryColor,
      backgroundColor: backgroundContrast,
      borderColor: primaryColor,
      textTransform: "capitalize",
      [theme.breakpoints.down("xs")]: {
        fontSize: 10,
      },
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: backgroundMain,
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
      backgroundColor: backgroundContrast,
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      backgroundColor: backgroundContrast,
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: backgroundContrast,
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      backgroundColor: "white",
    },
    hidden: {
      display: "none",
    },
    logoContainerHeading: {
      fontSize: 18,
    },
    menuHeading: {
      textAlign: "center",
      fontSize: 14,
      marginBottom: 10,
      marginTop: 10,
    },
    menuList: {
      position: "relative",
    },
    buttonsContainer: {
      [theme.breakpoints.down("xs")]: {
        display: "flex",
      },
    },
    buttonsText:{
      [theme.breakpoints.down("xs")]: {
        fontSize: 8,
      },  
    },
    MuiButton: {
      label:{
        [theme.breakpoints.down("xs")]: {
          fontSize: 8,
        },
      },
    },
  })
);

interface MenuItem {
  label: string;
  icon: () => any;
  route: string;
}

type DrawerContainerProps = {};

const DrawerContainer = ({ children, activityStatus }: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  console.log("TESTING STATUS", activityStatus);

  const history = useHistory();

  const signOut = async () => {
    await app.auth().signOut();
    history.push("/login");
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  var brokerMenuItems = [
    { label: "HOME", icon: () => <StoreIcon titleAccess="Home" />, route: "/" },
    {
      label: "ABOUT US",
      icon: () => <InfoIcon titleAccess="About us" />,
      route: "/about",
    },
    {
      label: "CONTACT US",
      icon: () => <AlternateEmailIcon titleAccess="Contact us" />,
      route: "/contact",
    },
  ];

  let menuItems: MenuItem[] = brokerMenuItems;

  // const buttonProps = {
  //   variant: isSmallScreen ? "text" : "outlined",
  //   size: isSmallScreen ? "small" : "large"
  // };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.header}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.logoHeader}>
            <div className={classes.logoContainer}>
              <img
                style={{ width: "60px", height: "auto" }}
                src={logo}
                alt="logo"
              />
            </div>
            <Typography
              variant="h6"
              noWrap
              className={classes.logoContainerHeading}
            >
              DCX Bullion
            </Typography>
          </div>
          <div className={classes.buttonsContainer}>
            <Button
              // {...buttonProps}
              onClick={() => history.push("/login")}
              className={
                activityStatus == false
                  ? `${classes.boxBtn} `
                  : `${classes.hidden}`
              }
              variant="outlined"
            >
              Login
            </Button>
            <Button
              // {...buttonProps}
              onClick={() => history.push("/signup")}
              className={
                activityStatus == false
                  ? `${classes.boxBtn} `
                  : `${classes.hidden}`
              }
              variant="outlined"
            >
              Register
            </Button>
            <Button
              // {...buttonProps}
              onClick={() => history.push("/profile")}
              className={
                activityStatus == true
                  ? `${classes.boxBtn} `
                  : `${classes.hidden}`
              }
              variant="outlined"
            >
             <div className={classes.buttonsText}>Profile</div> 
            </Button>
            <Button
              onClick={() => history.push("/orderHistory")}
              className={
                activityStatus == true
                  ? `${classes.boxBtn} `
                  : `${classes.hidden}`
              }
              variant="outlined"
            >
             <div className={classes.buttonsText}>Order History</div> 
            </Button>
            <Button
              className={
                activityStatus == true
                  ? `${classes.boxBtnSignOut} `
                  : `${classes.hidden}`
              }
              variant="outlined"
              onClick={() => signOut()}
            >
             <div className={classes.buttonsText}>Sign Out</div> 
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List className={classes.menuList}>
          {/* <div className={classes.menuHeading}>MENU</div> */}
          {menuItems.map((x) => {
            let match = location.pathname.includes(x.route);

            return (
              <ListItem button onClick={() => history.push(x.route)}>
                <ListItemIcon
                  style={{ color: match ? primaryText : primaryText }}
                >
                  {x.icon()}
                </ListItemIcon>
                <ListItemText
                  style={{ color: match ? primaryText : primaryText }}
                  className={classes.listItemText}
                  primary={x.label}
                />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
};

export default DrawerContainer;
