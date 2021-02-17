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
      width: theme.spacing(6),
      height: theme.spacing(6),
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
                    <a href="https://privacy.com/" className="privacy"><p style={fontStyle}>Privacy</p></a>
                    </div>
                    <div className="footer-column-2">
                        <div className="avatar">
                            <a href="https://www.facebook.com/" className="alicia"><Avatar  alt="Alicia Schoenefeld" src="https://tornode.org/static/core/assets/images/profile.jpg" className={classes.small} /></a>
                            <a href="https://www.facebook.com/" className="reza"><Avatar   alt="Reza Hajipour" src="http://www.eurochannel.com/images/stories/68563_O_Bebe_1_director.jpg" className={classes.small} /></a>
                            <a href="https://www.facebook.com/" className="selma"><Avatar  className="selma" alt="Selma" src="data:image/jpeg;base64,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" className={classes.small} /></a>
                        </div>
                    </div>
                    <div className="footer-column-3">
                        <a href="https://www.facebook.com/" className="facebook"><FacebookIcon color="#1565c0" fontSize="large" /></a>
                        <a href="https://twitter.com/?lang=en" className="twitter"><TwitterIcon color="#1565c0" fontSize="large" /></a>
                        <a href="https://www.instagram.com/" className="instagram"><InstagramIcon color="#1565c0" fontSize="large" /></a>
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