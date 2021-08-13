// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

export const authEndPoint = 'https://accounts.spotify.com/authorize';

const redirectUri = "http://localhost:3000/"

const clientId = "9577435ed3e74958a01349499b138632" // Get it from spotify dev acc

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUri = () => {
    return window.location.hash // go to the url and go to where there is hash(#)
        .substring(1)
        .split('&')
        .reduce((acc, item) => {
            let parts = item.split('=');
            acc[parts[0]] = decodeURIComponent(parts[1])
            return acc;
        }, {})
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;