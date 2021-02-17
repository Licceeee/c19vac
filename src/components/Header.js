import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    hero: {
        paddingBottom: theme.spacing(2),
        minHeight: 300,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#f9f9f9',
        backgroundImage: "url(https://images.unsplash.com/photo-1583910441831-65c1311edf05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80)"
    },
    title: {
        color: '#282c34',
        fontSize: 32,
        
    }
  }));

const Header = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div  spacing={5}>

                    <Paper
                        display="flex"
                        alignitems="center"
                        className={classes.hero}
                        justifycontent="center"
                        width="100vw"
                    >
                        {/* <Box className={classes.title}>
                            
                        </Box> */}
                    </Paper>
                {/* </Paper> */}
      
            </div>
        </div>
    );
}

export default Header;
