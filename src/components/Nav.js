import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { AdbRounded } from '@material-ui/icons';
import Switch from '@material-ui/core/Switch';
import logo from '../media/logo2.gif'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Container from '@material-ui/core/Container';
import Datetime from "./Datetime";



export default function SearchAppBar({ darkMode, setDarkMode, userSearch, handleInput, userSearchTyping }) {
  const classes = useStyles();

  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleInput(userSearch);
    }
  }

  return (



    <div className={classes.root}>


      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <Link to="/">
                <img src={logo} className="logo" alt="logo" />
              </Link>
            </IconButton>
            <Datetime />


            <div className={classes.navButton}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  // onChange={handleInput}
                  // value={userSearchTyping}
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </div>

            {/* <div className={classes.navButton}>
     
              <Button variant="contained" color="primary">
                <HashLink to="/#statistics">Statistics </HashLink>
              </Button>
  
          </div> */}




            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)} />
          </Toolbar>
        </Container>
      </AppBar>

    </div>

  );
}




// <Typography className={classes.title} variant="h6" noWrap>
// About us
// </Typography>




const useStyles = makeStyles((theme) => ({
  root: {

      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButton : {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
  },

  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  
}));