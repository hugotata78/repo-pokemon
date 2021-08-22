import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";

const PokeDetails = ({ pokemon, classes }) => {
  
  return (
    <div>
      <Grid container justifyContent="center">
        <Card className={classes.item}>
          <CardMedia
            className={classes.media}
            component="img"
            image={
              (pokemon && pokemon.sprites &&
                pokemon.sprites.other["official-artwork"].front_default) ||
              (pokemon && pokemon.sprites && pokemon.sprites.front_default)
            }
          />
          <CardContent>
            <Typography component="p" variant="h6" className={classes.pokeId}>
              #00{pokemon && pokemon.id}
            </Typography>
            <Typography className={classes.pokeName} component="p" variant="h4">
              {pokemon && pokemon.name}
            </Typography>
            <Typography component="p" variant="h5">
              Descripción:
            </Typography>
            <Typography component="p" variant="h6">
              Nombre: {pokemon && pokemon.name}
            </Typography>
            <Typography component="p" variant="h6">
              Especie: {pokemon && pokemon.species && pokemon.species.name}
            </Typography>
            <Typography component="p" variant="h6">
              Estatura: {pokemon && pokemon.height}
            </Typography>
            <Typography component="p" variant="h6">
              Peso: {pokemon.weight}
            </Typography>
            <Typography component="p" variant="h6">
              Experiencia: {pokemon.base_experience}
            </Typography>
            <Link to='/'>
              <Button variant="contained" color="primary">
                VOLVER
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default withStyles({
  item: {
    marginTop: "50px",
    minWidth: "200px",
    margin: "1em",
    boxSizing: "border-box",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    padding: "15px",
  },
  media: {
    maxWidth: "50%",
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
})(PokeDetails);
