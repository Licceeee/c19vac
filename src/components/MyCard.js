import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minHeight: 150,
      },
  }));


const MyCard = ({ fields, id }) => {

    const classes = useStyles();
 
    const {name, vaccines} = fields;
    // const { id } = useParams();

    return (
        <>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <h3>{ name }</h3>
                    <h4>
                    # vaccines: {vaccines ? vaccines.length : "0"}
                    </h4>
                    
                    <Link to={`/${id}`} className="link">Read more</Link>
                </Paper>
            </Grid>
        </>
    );
}

export default MyCard;
