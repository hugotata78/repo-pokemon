import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";

const PokeCard = ({ name, img, id, classes }) => {
  return (
    <Link className={classes.lnk} to={`/pokemon/${name}`}>
      <Card className={classes.item}>
        <CardMedia component="img" image={img} className={classes.media} />
        <CardContent>
          <Typography component="p" variant="h6" className={classes.pokeId}>
            #00{id}
          </Typography>
          <Typography component="p" variant="h5" className={classes.pokeName}>
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
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
    width: "25%",
    margin: "20px auto",
    backgroundColor:'#85848C',
    borderRadius:'50%',
    padding:'10px'
  },
  pokeName: {
    textAlign: "center",
    color: "#2d2a2a",
    fontWeight:'bold'
  },
  pokeId:{
    textAlign: "center",
    color: "#2d2a2a",
  },
  lnk: {
    textDecoration: "none",
  },
})(PokeCard);
