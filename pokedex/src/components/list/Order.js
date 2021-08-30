import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
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

const Order = () => {
    const classes = useStyles();
    const history = useHistory()

    const orderByNameAZ = (e) => {
        e.preventDefault()
        history.push('/order/nameA-Z')
    }

    const orderByNameZA = (e) => {
        e.preventDefault()
        history.push('/order/nameZ-A')
    }



    return (
        <div className={classes.root}>
            <List component="nav">
                <ListItem button >
                    <ListItemIcon  >
                        <ArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary='Nombres A-Z' onClick={e => orderByNameAZ(e)} />
                </ListItem>
                <ListItem button >
                    <ListItemIcon  >
                        <ArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary='Nombres Z-A' onClick={e => orderByNameZA(e)} />
                </ListItem>
                <Divider />
            </List>
        </div>
    );
};

export default Order;
