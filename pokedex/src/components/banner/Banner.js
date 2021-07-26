import { Typography, withStyles } from "@material-ui/core";
import React from "react";
import './banner.css'

const Banner = ({ classes }) => {
  return (
    <div className='banner'>
      <Typography component="p" variant="h2" className={classes.title}>
        PokéDex
      </Typography>
    </div>
  );
};

export default withStyles({
  
  title: {
    color: "#FFCC03",
    fontWeight: "bold",
    WebkitTextStroke: "2px blue",
    fontSize: "70px",
  },
})(Banner);
