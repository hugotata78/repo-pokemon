import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';



const Loading = ()=> {

  return(
    <Grid container justifyContent='center' alignItems='center' marginTop='80px'>
      <Typography component='p' variant='h3' color='green'>
        Buscando ...
      </Typography>
    </Grid>
  );
}

export default Loading