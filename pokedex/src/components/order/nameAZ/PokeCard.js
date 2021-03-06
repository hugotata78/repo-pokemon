import { Card, CardContent, CardMedia, Grid, Typography, withStyles } from '@material-ui/core';
import React from 'react'
import { Link } from "react-router-dom";

const PokeCard = ({ name, img, id, classes }) => {
  return (
    <Link className={classes.lnk} to={`/pokemon/${name}`}>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.item}>
          <CardMedia component="img" image={img} className={classes.media} />
          <CardContent>
            <Typography component="p" variant="h6" className={classes.pokeId}>
              #{id}
            </Typography>
            <Typography component="p" variant="h5" className={classes.pokeName}>
              {name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Link>
  );
};

export default withStyles({
  item: {
    width: "250px",
    margin: "1em",
    boxSizing: "border-box",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
  },
  media: {
    width: "35%",
    margin: "20px auto",
    backgroundColor: "#85848C",
    borderRadius: "50%",
    padding: "10px",
  },
  pokeName: {
    textAlign: "center",
    color: "#2d2a2a",
    fontWeight: "bold",
  },
  pokeId: {
    textAlign: "center",
    color: "#2d2a2a",
  },
  lnk: {
    textDecoration: "none",
  },
})(PokeCard);
