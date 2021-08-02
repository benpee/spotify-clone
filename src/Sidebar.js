import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img src="https://gateway.com/gateway/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify logo" className="sider__logo" />
            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
            <strong className="sidebar__title">PLAYLIST</strong>
            <hr />
            {playlists?.item.map(playlist => <SidebarOption title={playlist.name} />)}
        </div >
    )
}

export default Sidebar
