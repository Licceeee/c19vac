import React from 'react';
import Details from "./Details";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from './Header'
import Card from './Card'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: 0,
      margin: 0,
    },
  }));


const Main = ({ vaccineType }) => {

    const classes = useStyles();

    return (
        <>
            <Header />

            <h2>Vaccine Types</h2>

            <div className={classes.root}>
                <Grid container spacing={6}>

                    {vaccineType && vaccineType.map((vac, index) => {

                        return <Card key={index} {...vac} />

                    })}

                </Grid>
            </div>
            <Details />
        </header>
        </>
    );
}

export default Main;
