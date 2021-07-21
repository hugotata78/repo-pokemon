import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom'

const NavBar = ({ classes }) => {
  return (
    <div>
      <AppBar className={classes.styleBar}>
        <Toolbar>
          <Link to={`/`} className={classes.lnk}>
            <Typography
              component="p"
              variant="h4"
              className={classes.styleFont}
            >
              Pokedex
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles({
  styleBar: {
    background: "#BF2929",
    padding: "10px",
  },
  styleFont: {
    color: "#2d2a2a",
  },
  lnk:{
    textDecoration:'none'
  }
})(NavBar);
