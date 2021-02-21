import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link, useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 170,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        alignContent: 'center',
        // backgroundColor: '#16191f',
        // color: '#fff'
        
      },
      link: {
          paddingBottom: 5,
      },
      heading: {
          height: 30,
      }
  }));


const MyCard = ({ fields, id }) => {

    const classes = useStyles();
 
    const {name, vaccines} = fields;
    // const { id } = useParams();

    return (
        <>
            <Grid item xs={12} sm={6} md={3} className={classes.root}>
                <Paper className={classes.paper} elevation={3}>
                    
                        <h3 className={classes.heading}>{ name }</h3>
                        <h4>
                        # vaccines: {vaccines ? vaccines.length : "0"}
                        </h4>
                    
                    
                    <Link to={`/${id}`} className="link">
                        <Button variant="contained" color="secondary">
                            Read More
                        </Button>
                    </Link>
                </Paper>
            </Grid>
        </>
    );
}

export default MyCard;
