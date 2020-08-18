import React, { useEffect, useState } from 'react';
import { authEndpoint, clientId, redirectUri, scopes } from './config';
import hash from './hash';
import { useParams } from 'react-router-dom';

const Spotify = (props) => {
    const params = useParams();
    const [token, setToken] = useState();
    const [SpotifyData, setSpotifyData] = useState({
        item: {
            album: {
                images: [{ url: "" }]
            },
            name: "",
            artists: [{ name: "" }],
            duration_ms: 0
        },
        is_playing: "Paused",
        progress_ms: 0,
        no_data: false
    })
    useEffect(() => {
        // Set token
        let _token = hash.access_token;
        if (_token) {
            // Set token
            setToken(
                _token
            );
            getCurrentlyPlaying(_token)
        }
    }, []);
    const getToken = () => {
        var url = new URL(document.URL);
        var c = url.searchParams.get("code");
        return c
    }
    const getCurrentlyPlaying = (token) => {
        // Make a call using the token
        fetch('https://api.spotify.com/v1/me/player', {
            method: 'GET',
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
            })
        })
            .then(response => response.json())
            .then(data => {
                if (!data) {
                    setSpotifyData({
                        ...SpotifyData, no_data: true,
                    });
                    return;
                }

                setSpotifyData({
                    ...SpotifyData,
                    item: data.item,
                    is_playing: data.is_playing,
                    progress_ms: data.progress_ms,
                    no_data: false /* We need to "reset" the boolean, in case the
                            user does not give F5 and has opened his Spotify. */
                });
            })
            .catch(err => console.log(err))
    }

    const CheckForAuth = () => {
        const data = new URLSearchParams();
        data.append("grant_type", "authorization_code");
        data.append("redirect_uri", redirectUri);
        data.append("code", getToken());
        fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: new Headers({
                'Authorization': `Basic ${new Buffer(clientId + ':' + '46fd67487f134d238b117f30c40d6a06').toString('base64')}`,
                'Content-type': "application/x-www-form-urlencoded"
            }),
            body: data
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            {!token && (
                <a
                    className="btn btn--loginApp-link"
                    href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                        "%20"
                    )}&response_type=code&show_dialog=true`}
                >
                    Login to Spotify
                </a>
            )}
            <button onClick={() => CheckForAuth()}>hi</button>
        </div>
    )
}
Spotify.propTypes = {
};

export default Spotify;