import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles(() => ({
    heading: {
        padding: 5,


    }
}));


const Heading = ({ text }) => {

    const classes = useStyles();

    return (
        <h1 className={classes.heading} style={{ color: '#5d70f4' }}>{text}</h1>
    );
}

export default Heading;
