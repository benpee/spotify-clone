import React from 'react';
import { useStateProvider } from '../context/state-context';
import classes from './Body.module.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import Header from './Header';
import SongRow from './SongRow';


function Body({ spotify }) {
    const [{ discover_weekly }] = useStateProvider();
    return (
        <div className={classes.body}>
            <Header spotify={spotify} />

            <div className={classes.body__info}>
                <img src={discover_weekly?.images[0].url} alt="Discover Weekly" />
                <div className={classes.body__infoText}>
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className={classes.body__songs}>
                <div className={classes.body__icon}>
                    <PlayCircleFilledIcon className={classes.body__shuffle} />
                    <FavoriteIcon fontSize="large" />
                    <MoreHoriz />
                </div>
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body
