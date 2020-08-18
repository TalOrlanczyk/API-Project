export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "e0b0e7a3bded4c34b63ea6eacab756b1";
export const redirectUri = "http://localhost:3000/Spotify";
export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
];