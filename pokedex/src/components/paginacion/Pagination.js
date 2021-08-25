import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  btn: {
    margin: "20px",
  },
}));

const Pagination = ({ nextPage, prevPage, offSet, count }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justifyContent="center">
        {
          offSet <= 0 ?
            <Button
              variant="contained"
              color="primary"
              title="Anterior"
              className={classes.btn}
              size="large"
              disabled
              onClick={prevPage}
            >
              <ArrowBackIcon fontSize="large" />
            </Button>
            :
            <Button
              variant="contained"
              color="primary"
              title="Anterior"
              className={classes.btn}
              size="large"
              onClick={prevPage}
            >
              <ArrowBackIcon fontSize="large" />
            </Button>
        }
        {count - offSet <= 12 ? <Button
          variant="contained"
          color="primary"
          title="siguiente"
          className={classes.btn}
          size="large"
          disabled
          onClick={nextPage}
        >
          <ArrowForwardIcon fontSize="large" />
        </Button>
          :
          <Button
            variant="contained"
            color="primary"
            title="siguiente"
            className={classes.btn}
            size="large"
            onClick={nextPage}
          >
            <ArrowForwardIcon fontSize="large" />
          </Button>
        }

      </Grid>
    </div>
  );
};

export default Pagination;
