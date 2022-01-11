import { Link } from "react-router-dom"
import classes from '../../styles/NotFound.module.css'


const NotFound = () => {

  return (
    <div className={classes.container}>
    <p className={classes.h1}>:(</p><br/>
    <p className={classes.h2}>A <span>404</span> error occured, Page not found, check the URL and try again.</p><br/><br/>
      <p className={classes.h3}> <Link to="/">Back to the Homepage</Link>&nbsp;|&nbsp;</p>
    </div>  
  );
}
 
export default NotFound;