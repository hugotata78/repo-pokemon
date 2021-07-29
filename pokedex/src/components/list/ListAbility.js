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
import { getAbilityPokemon, getTypesPokemon } from "../../redux/actions/actionPokemon";

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
  const dispatch = useDispatch();
  const ability = useSelector((state) => state.pokemonReducer.ability);

  useEffect(() => {
    dispatch(getAbilityPokemon());
  }, [dispatch]);

  
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
                    <ListItemText primary={a.name} />
                  </ListItem>
                );
              })}
            <Divider />
          </List>
    </div>
  );
};

export default ListAbility;