import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    heading: {
        padding: 50,
    }
}));


const Heading = ( {text} ) => {

    const classes = useStyles();

    return (
        <h1 className={classes.heading}>{text}</h1>
    );
}

export default Heading;
