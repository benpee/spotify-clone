import React from 'react';
import classes from './SongRow.module.css';

function SongRow({ track = "test" }) {
    return (
        <div className={classes.songRow}>
            <img
                src={track.album.images[0].url}
                alt={track.album.name}
                className={classes.songRow__album}
            />
            <div className={classes.songRow__info}>
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map(artist =>
                        artist.name).join(",")} -{" "} {track.album.name}

                </p>
            </div>
        </div>
    )
}

export default SongRow
