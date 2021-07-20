import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";

const PokeCard = ({ name, classes }) => {
  return (
    <Card className={classes.item}>
      <CardMedia />
      <CardContent>
        <Typography component="p" variant="h6" className={classes.pokeName}>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles({
  item: {
    minWidth: "350px",
    margin: "1em",
    boxSizing: "border-box",
  },
  media: {
    minWidth: "25%",
  },
  pokeName:{
      textAlign:'center',
      color:'#2d2a2a'
  }
})(PokeCard);
