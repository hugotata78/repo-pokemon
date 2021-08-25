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
  import Img from '../../img/img-404.png'
  
  const Errors = ({ classes }) => {
    
    return (
      <div>
        <Grid container justifyContent="center" margin='auto'>
          <Card className={classes.item}>
            <CardMedia
              className={classes.media}
              component="img"
              image={Img}
            />
            <CardContent>
              <Typography component="p" variant="h6" className={classes.pokeId}>
                #404
              </Typography>
              <Typography className={classes.pokeName} component="p" variant="h4">
                Pokemon no encontrado
              </Typography>
              <Link to='/' >
                <Button variant="contained" color="primary" textDecoration='none'>
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
      maxWidth: "500px",
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
  })(Errors);
  