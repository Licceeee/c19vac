import React from 'react';
import Details from "./Details";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from './Header'
import MyCard from './MyCard'
import Heading from './Heading'
import Loading from './Loading'
import Container from '@material-ui/core/Container';



const Main = ({ vaccineTypes, loading }) => {

    const classes = useStyles();

    return (
        <>
            <Header />

            <Container maxWidth="lg">

                <Heading text="Vaccine types" />
                <div className={classes.root}>

                    {loading 
                    
                    ?
                        <Loading />
                    :

                        <Grid container spacing={6}>
                            {vaccineTypes && vaccineTypes.map((vac) => {

                                return <MyCard key={vac.id} {...vac} id={vac.id}/>

                            })}

                        </Grid>
                    }          
                </div>

            </Container>
        </>
    );
}

export default Main;



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 0,
        margin: 0,
    },
    loading: {
        paddingBottom: 30,
    }
}));
