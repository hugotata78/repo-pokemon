import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom'
import image from '../../img/pokeball-icon-15.png'

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
              <img src={image} className={classes.styleImg} alt='pokeball'/>
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
    fontWeight:'bold',
    
  },
  lnk:{
    textDecoration:'none'
  }, 
  styleImg:{
    width:'60px'
  }
})(NavBar);
