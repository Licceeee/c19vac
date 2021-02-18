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
        backgroundImage: "url(https://media.discordapp.net/attachments/811977643661459496/811979654311051264/unknown.png)"
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
