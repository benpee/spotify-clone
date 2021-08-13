import React from 'react';
import classes from './Sidebar.module.css';
import SiderbarOption from './SiderbarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateProvider } from '../context/state-context';

function Sidebar() {
    const [{ playlists }] = useStateProvider();
    return (
        <div className={classes.sidebar}>
            <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="Spotify logo"
                className={classes.sidebar__logo}
            />
            <SiderbarOption title="Home" Icon={HomeIcon} />
            <SiderbarOption title="Search" Icon={SearchIcon} />
            <SiderbarOption title="Your Library" Icon={LibraryMusicIcon} />

            <br />
            <strong className={classes.sidebar__title}>PLAYLISTS</strong>
            <hr />
            {playlists?.items.map(playlist => (
                <Sidebar title={playlist.name} />
            ))}
        </div>

    )
}

export default Sidebar
