import React from 'react';
import classes from './Footer.module.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.footer_left}>
                {/* <p>Album and song details</p> */}
                <img src="" alt="Album cover" className={classes.footer__albumLogo} />
                <div className={classes.footer__songInfo}>
                    <h4>No song is playing</h4>
                    <p>...</p>
                </div>
            </div>

            <div className={classes.footer_center}>
                {/* <p>Player controls</p> */}
                <ShuffleIcon className={classes.footer__green} />
                <SkipPreviousIcon className={classes.footer__icon} />
                <PlayCircleOutlineIcon fontSize="large" className={classes.footer__icon} />
                <SkipNextIcon className={classes.footer__icon} />
                <RepeatIcon className={classes.footer__green} />
            </div>

            <div className={classes.footer_right}>
                {/* <p>Volume controls</p> */}
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
