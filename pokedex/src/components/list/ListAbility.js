import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
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
}));

const ListAbility = () => {
  const classes = useStyles();
  const history = useHistory()
  const dispatch = useDispatch();
  const ability = useSelector((state) => state.pokemonReducer.ability);

  useEffect(() => {
    dispatch(getAbilityPokemon());
  }, [dispatch]);

  const handleClick = (e,name) => {
    e.preventDefault()
    history.push(`/ability/${name}`)
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
                    <ListItemText primary={a.name} onClick={e=>handleClick(e,a.name)}/>
                  </ListItem>
                );
              })}
            <Divider />
          </List>
    </div>
  );
};

export default ListAbility;