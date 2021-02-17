import React from 'react';
import "./Footer.css"
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

 const Footer = () =>  {
    const classes = useStyles();
    const fontStyle = {
        fontSize: 18,
        color: 	"#FFFFFF",
        padding: "5px",
        fontWeight: 'bold',
    }

    
    
    
    return (
        <div>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-column-1">
                    <a href="https://privacy.com/"><p style={fontStyle}>Privacy</p></a>
                    </div>
                    <div className="footer-column-2">
                        <div className="avatar">
                            <Avatar  alt="Alicia Schoenefeld" src="https://tornode.org/static/core/assets/images/profile.jpg" className={classes.large} />
                            <Avatar  alt="Reza Hajipour" src="http://www.eurochannel.com/images/stories/68563_O_Bebe_1_director.jpg" className={classes.large} />
                            <Avatar  alt="Selma" src="/static/images/avatar/3.jpg" className={classes.large} />
                        </div>
                    </div>
                    <div className="footer-column-3">
                        <a href="https://www.facebook.com/"><FacebookIcon color="#1565c0" fontSize="large" /></a>
                        <a href="https://twitter.com/?lang=en"><TwitterIcon color="#1565c0" fontSize="large" /></a>
                        <a href="https://www.instagram.com/"><InstagramIcon color="#1565c0" fontSize="large" /></a>
                    </div>
                </div>
            </footer>
        </div>


    )
    
    
    
    
    
    
  
}












//   return (
//       <section className="footer">
//         <div className="footer-left"></div>
//         <div className="avatar">
//             <Avatar  alt="Alicia Schoenefeld" src="https://tornode.org/static/core/assets/images/profile.jpg" className={classes.large} />
//             <Avatar  alt="Reza Hajipour" src="http://www.eurochannel.com/images/stories/68563_O_Bebe_1_director.jpg" className={classes.large} />
//             <Avatar  alt="Selma" src="/static/images/avatar/3.jpg" className={classes.large} />
//         </div>
        
            
        
//       </section>
   
//   );


export default Footer