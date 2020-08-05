import React, { useState, useEffect } from 'react';
const Youtube = ({youtube_id}) => {
    let player,
        done = false;
    useEffect(() => {
        const YouTubeScript = document.createElement('script');
        const firstScriptTag = document.getElementsByTagName('script')[0];
        YouTubeScript.src = `https://www.youtube.com/iframe_api`;
        window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
        firstScriptTag.parentNode.insertBefore(YouTubeScript, firstScriptTag);
        window.document.body.appendChild(YouTubeScript)
        

    }, []);
    const onYouTubeIframeAPIReady = () => {
        player = new window.YT.Player('player', {
            height: '390px',
            width: '50%',
            videoId: youtube_id,
            // playerVars: { 'autoplay': 1, 'controls': 0,'autohide':1,'wmode':'opaque','origin':'http://localhost:3000' },
            host: 'http://www.youtube.com',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
    const onPlayerReady = (event) => {
        event.target.playVideo();
    }

    const onPlayerStateChange = (event) => {
        if (event.data == window.YT.PlayerState.PLAYING && !done) {
            setTimeout(stopVideo, 6000);
            done = true;
        }
    }
    const stopVideo = () => {
        player.stopVideo();
    }
    return (
        <div>
            <div id="player"></div>
        </div>
    )
}
export default Youtube