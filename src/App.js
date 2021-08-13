import React, { useEffect } from 'react';
import classes from './App.module.css'
import Login from './components/Login';
import Player from './components/Player';
import { getTokenFromUri } from './spotify/spotify';
import SpotifywebApi from "spotify-web-api-js";
import { useStateProvider } from './context/state-context';

const spotify = new SpotifywebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = getTokenFromUri();
    window.location.hash = "";
    const _token = hash.access_token

    if (_token) {
      // setToken(_token)

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then((user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      }));

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists
        })
      })

      spotify.getPlaylist('4EE1SLGsJokeyBjcgNl87y').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      })
    }
    console.log("I have  a token", token)

  }, [token, dispatch]);
  console.log('👾', user);
  console.log(token)

  return (
    <div className={classes.app}>
      {
        !token ? (
          <Login />
        ) : (
          <Player spotify={spotify} />
        )}
    </div>
  )
}

export default App
