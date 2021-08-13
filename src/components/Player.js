import React from 'react';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import classes from './Player.module.css';

function Player({ spotify }) {
    return (
        <div className={classes.player}>
            <div className={classes.player__body}>
                <Sidebar />
                <Body spotify={spotify} />
            </div>
            <Footer />
        </div>
    )
}

export default Player
