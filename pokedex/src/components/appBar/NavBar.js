import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      color:'#140D0D',
      
    },
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          area-label="menu"
          className={classes.menuButton}
          onClick={()=>props.deploy()}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" className={classes.title}>
          AppMaterial
        </Typography>
        <Button variant="h6">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
