import classes from './Login.module.css';
import React from 'react';
import { loginUrl } from '../spotify/spotify';


function Login() {
    return (
        <div className={classes.login}>
            {/* Spotify Logo */}
            <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="Spotify Logo"
            />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
