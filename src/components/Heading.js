import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    heading: {
        padding: 30,
    }
}));


const Heading = ( {text} ) => {

    const classes = useStyles();

    return (
        <h2 className={classes.heading}>{text}</h2>
    );
}

export default Heading;
