import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";

const PokeDetails = ({ pokemon, classes }) => {

  console.log(pokemon)
  return (
    <div>
      <Grid container justifyContent="center">
        <Card className={classes.item}>
          <CardMedia
            className={classes.media}
            component="img"
            image={
              (pokemon.sprites &&
                pokemon.sprites.other["official-artwork"].front_default) ||
              (pokemon.sprites && pokemon.sprites.front_default)
            }
          />
          <CardContent>
            <Typography component="p" variant="h6" className={classes.pokeId}>
              #{pokemon.id}
            </Typography>
            <Typography className={classes.pokeName} component="p" variant="h4">
              {pokemon.name}
            </Typography>
          </CardContent>
          <div className={classes.root}>
            <CardContent>
              <Typography component="p" variant="h5">
                Descripción:
              </Typography>
              <Typography component="p" variant="h6">
                Nombre: {pokemon.name}
              </Typography>
              <Typography component="p" variant="h6">
                Especie: {pokemon.species && pokemon.species.name}
              </Typography>
              <Typography component="p" variant="h6">
                Estatura: {pokemon.height}
              </Typography>
              <Typography component="p" variant="h6">
                Peso: {pokemon.weight}
              </Typography>
              <Typography component="p" variant="h6">
                Experiencia: {pokemon.base_experience}
              </Typography>
            </CardContent>
            <div className={classes.details}>
              <CardContent>
                <Typography component='p' variant='h5' margin='auto'> Estadisticas</Typography>
                {
                  pokemon.stats && pokemon.stats.map(s => {
                    return (
                      <div key={s.base_stat}>
                        <Typography component='p' variant='h6' >{s.stat.name}: {s.base_stat}</Typography>
                      </div>
                    )
                  })
                }
              </CardContent>
            </div>
          </div>

        </Card>
      </Grid>
    </div>
  );
};

export default withStyles({
  root: {
    display: 'flex',
  },
  item: {
    marginTop: "50px",
    minWidth: "250px",
    margin: "1em",
    boxSizing: "border-box",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    padding: "15px",
  },
  media: {
    maxWidth: "50%",
    margin: "auto",
    backgroundColor: "#85848C",
    borderRadius: "50%",
    padding: "10px",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft:'30px'
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
