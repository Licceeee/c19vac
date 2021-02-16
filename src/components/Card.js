import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  }));


const Card = ({ fields }) => {

    const classes = useStyles();
    
    return (
        <>
            <Grid item xs={3}>
                <Paper className={classes.paper}>{ fields.name }</Paper>
            </Grid>
        </>
    );
}

export default Card;
