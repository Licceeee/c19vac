import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    hero: {
      padding: theme.spacing(2),
      minHeight: 200,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundImage: "url(https://www.paho.org/sites/default/files/styles/flexslider_full/public/2020-03/blue-covid-banner.jpg?h=96546727&itok=cZemcbKa)"
    },
  }));


const Header = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Paper className={classes.hero} width={1}>xs=12</Paper>
                </Grid>
            </Grid>
        </div>
            // <header className="App-header">
            //     <h1 className="mb-5">welcome to c19vac</h1>
            // </header>
    );
}

export default Header;
