import React from 'react';
import "./Footer.css"
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Grid from '@material-ui/core/Grid';


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
  icon: {
    color: '#1565c0',
  }
}));

const Footer = () => {
  const classes = useStyles();
  const fontStyle = {
    fontSize: 18,
    color: "#FFFFFF",
    padding: "5px",
    fontWeight: 'bold',
  }




  return (
    <div>
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-column-1">
            <a href="https://privacy.com/" className="resize-on-hover"><p style={fontStyle}>Privacy</p></a>
          </div>

          <div className="footer-column-2">
            <div className="avatar">
              <a href="https://www.linkedin.com/in/alicia-schonefeld/" className="resize-on-hover"><Avatar alt="Alicia Schonefeld" src="https://tornode.org/static/core/assets/images/profile.jpg" className={classes.small} /></a>
              <a href="https://www.linkedin.com/in/reza-hajipour-aa07283b/?originalSubdomain=de" className="resize-on-hover"><Avatar alt="Reza Hajipour" src="http://www.eurochannel.com/images/stories/68563_O_Bebe_1_director.jpg" className={classes.small} /></a>
              <a href="https://www.linkedin.com/in/selma-mikic-417951168/" className="resize-on-hover"><Avatar alt="Selma Mikic" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQEBAJCBAKDQoNDQkJDRsICQcNIB0iIiAdHx8kKDQsJCYxJx8fLTItMT1AQ0NDIys8QD8tQDRBOjcBCgoKDQ0NFw8OFTcZFhkrKzc3NzcrLSsrNysxLSs3LS0yNzI3LTc3Ky0tNS0rLSszLy03LTc3NysrKysrNysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA+EAABAwIDBQUECAYBBQAAAAABAAIDBBEFEiEGMUFRcRMiYYGRMlJysQcUI5KhwdHwM0JDYoLhFVNjc8Lx/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACURAAICAgICAgMAAwAAAAAAAAABAhEDIQQxElEiQQUTMhRScf/aAAwDAQACEQMRAD8A9fQkSKSaFui6R" className={classes.small} /></a>
            </div>
          </div>

          <div className="footer-column-3">
            <a href="https://www.facebook.com/" className="resize-on-hover"><FacebookIcon fontSize="large" /></a>
            <a href="https://twitter.com/?lang=en" className="resize-on-hover"><TwitterIcon fontSize="large" /></a>
            <a href="https://www.instagram.com/" className="resize-on-hover"><InstagramIcon fontSize="large" /></a>
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