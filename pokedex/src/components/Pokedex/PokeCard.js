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
    minWidth: "150px",
    margin: "1em",
    boxSizing: "border-box",
  },
  media: {
    minWidth: "100px",
  },
  pokeName: {
    textAlign: "center",
    color: "#2d2a2a",
  },
})(PokeCard);
