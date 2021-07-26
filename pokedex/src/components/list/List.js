import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import CloudIcon from "@material-ui/icons/Cloud";
import PersonIcon from "@material-ui/icons/Person";

const MenuList = () => {
  return (
    <div>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <CloudIcon />
          </ListItemIcon>
          <ListItemText primary="Nube" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Persona" />
        </ListItem>
        <Divider/>
      </List>
    </div>
  );
};

export default MenuList;
