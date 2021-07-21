import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";

const PokeCard = ({ name, img, classes }) => {
  return (
    <Card className={classes.item}>
      <CardMedia component='img' image={img} className={classes.media} />
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
    minWidth: "200px",
    margin: "1em",
    boxSizing: "border-box",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
  },
  media: {
    maxWidth: "25%",
    margin: '20px auto'
  },
  pokeName: {
    textAlign: "center",
    color: "#2d2a2a",
  },
})(PokeCard);
