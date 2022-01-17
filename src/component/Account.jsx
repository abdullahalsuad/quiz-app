import {useAuth} from '../context/AuthContext'
import { NavLink } from 'react-router-dom'
import classes from '../styles/Account.module.css'

export default function Account() {
    const { currentUser, logout } = useAuth();
    return (
        <div className={classes.account}>
            {currentUser ? (
            <>
                <span className="material-icons-outlined" title="Account"> account_circle </span>
                <span><b style={{color:"red"}}>{currentUser.displayName}</b></span> 
                <span className="material-icons-outlined" title="Logout" onClick={logout}> {" "} logout{" "}</span>
            </>
            ) :(
                <>
                    <NavLink to='/signup'><b style={{color:"red"}}>Signup</b></NavLink>
                    <b>||</b>
                    <NavLink to='/login'><b style={{color:"red"}}>Login</b></NavLink>
                </>
            )}
            
      </div>

    )
}