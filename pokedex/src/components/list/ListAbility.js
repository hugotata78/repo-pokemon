import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { getAbilityPokemon } from "../../redux/actions/actionPokemon";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  btn: {
    margin: "10px",
  },
}));

const ListAbility = () => {
  const classes = useStyles();
  const history = useHistory()
  const dispatch = useDispatch();
  const ability = useSelector((state) => state.pokemonReducer.ability);
  const [offSet, setOffset] = useState(0)

  useEffect(() => {
    dispatch(getAbilityPokemon(offSet));
  }, [dispatch,offSet]);

  const handleClick = (e, name) => {
    e.preventDefault()
    history.push(`/ability/${name}`)
  }

  const nextPage = () => {
    setOffset(offSet + 20)
  }

  const prevPage = () => {
    setOffset(offSet <= 0 ? 0 : offSet - 20)
  }
  return (
    <div className={classes.root}>
      <List component="nav">
        {ability &&
          ability.map((a) => {
            return (
              <ListItem button key={a.name}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary={a.name} onClick={e => handleClick(e, a.name)} />
              </ListItem>
            );
          })}

        <Divider />
      </List>
      {offSet <= 0 ? <Button
        variant="contained"
        color="primary"
        title="Anterior"
        disabled
        className={classes.btn}
      >
        <ArrowBackIcon />
      </Button>
        :
        <Button
          variant="contained"
          color="primary"
          title="Anterior"
          className={classes.btn}
          onClick={prevPage}
        >
          <ArrowBackIcon />
        </Button>
      }
      <Button
        variant="contained"
        color="primary"
        title="Siguiente"
        className={classes.btn}
        onClick={nextPage}
      >
        <ArrowForwardIcon />
      </Button>
    </div>
  );
};

export default ListAbility;