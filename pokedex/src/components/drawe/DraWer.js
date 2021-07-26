import { makeStyles, Drawer, Divider } from "@material-ui/core";
import React from "react";
import MenuList from "../list/List";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar:theme.mixins.toolbar
}));

const DraWer = (props) => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
        <div className={classes.toolbar}></div>
        <Divider/>
        <MenuList/>
    </Drawer>
  );
};

export default DraWer;
