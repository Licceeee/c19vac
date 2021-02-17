import React from 'react';
import Details from "./Details";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from './Header'
import MyCard from './MyCard'
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 0,
        margin: 0,
    },
}));


const Main = ({ vaccineTypes }) => {

    const classes = useStyles();

    return (
        <>
            <Header />

            <Container maxWidth="lg">
                <h2>Vaccine Types</h2>

                <div className={classes.root}>
                    <Grid container spacing={6}>

                        {vaccineTypes && vaccineTypes.map((vac) => {

                            return <MyCard key={vac.sys.id} {...vac} id={vac.sys.id}/>

                        })}

                    </Grid>
                </div>

            </Container>
        </>
    );
}

export default Main;
