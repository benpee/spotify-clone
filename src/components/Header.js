import React from 'react';
import classes from './Header.module.css';
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core"
import { useStateProvider } from '../context/state-context';

function Header() {
    const [{ user }] = useStateProvider();
    return (
        <div className={classes.header}>
            <div className={classes.header__left}>
                <SearchIcon />
                <input
                    type="text"
                    placeholder="Search for Artists, Songs or Playlists"
                />
            </div>

            <div className={classes.header__right}>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
