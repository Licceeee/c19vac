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


const MyCard = ({ fields }) => {

    const classes = useStyles();
    
    const {name, vaccines } = fields

    return (
        <>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <h3>{ name }</h3>
                    <h4>
                    # vaccines: {vaccines ? vaccines.length : "0"}
                    </h4>
                    

                </Paper>
            </Grid>
        </>
    );
}

export default MyCard;
