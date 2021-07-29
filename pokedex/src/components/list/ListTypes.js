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
import { getTypesPokemon } from "../../redux/actions/actionPokemon";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const ListTypes = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokemonReducer.types);

  useEffect(() => {
    dispatch(getTypesPokemon());
  }, [dispatch]);

 
  return (
    <div className={classes.root}>
      <List component="nav">
          {types &&
              types.map((type) => {
                return (
                  <ListItem button key={type.name}>
                    <ListItemIcon>
                      <ArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary={type.name} />
                  </ListItem>
                );
              })}
            <Divider />
          </List>
    </div>
  );
};

export default ListTypes;
