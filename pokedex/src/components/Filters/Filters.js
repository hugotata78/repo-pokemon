import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from "react";


const Filters = ({ classes }) => {
  return (
    <div>
      <Grid item xs={3}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component="p" variant="h6">
              Tipos
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="p">Tipos de Pokemon</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
            <Typography component="p" variant="h6">
              Habilidades
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="p">Tipos de Habilidades</Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </div>
  );
};

export default withStyles()(Filters);
