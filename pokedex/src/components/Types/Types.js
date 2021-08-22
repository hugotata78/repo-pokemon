import React, { useState } from 'react'
import NavBar from "../appBar/NavBar";
import { makeStyles, Hidden } from "@material-ui/core";
import DraWer from "../drawe/DraWer";
import Pagination from "../paginacion/Pagination";
import List from './List';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

const Types = () => {

    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [offSet, setOffset] = useState(0);
    const [limit,setLimit] = useState(12)

    const nextPage = () => {
        setOffset(offSet + 12);
        setLimit(limit + 12)
    };

    const prevPage = () => {
        setOffset(offSet <= 0 ? 0 : offSet - 12);
        setLimit(limit - 12)
    };

    const deploy = () => {
        setOpenDrawer(!openDrawer);
    };
    return (
        <div className={classes.root}>
            <NavBar deploy={deploy} />
            <Hidden xsDown>
                <DraWer variant="permanent" open={true} />
            </Hidden>
            <Hidden smUp>
                <DraWer variant="temporary" open={openDrawer} onClose={deploy} />
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                <List offSet={offSet} limit={limit}/>
                <Pagination nextPage={nextPage} prevPage={prevPage} offSet={offSet} />
            </div>
        </div>
    );
}

export default Types