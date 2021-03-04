import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function Loading() {

    const classes = useStyles();

    return (
        <div className={classes.loading}>
            <LinearProgress />
            <LinearProgress color="secondary" />
        </div>
    )
}

const useStyles = makeStyles(() => ({
    loading: {
        paddingBottom: 30,
    }
}));
