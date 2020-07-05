import React from 'react';
import YouTube from 'react-youtube';

class Player extends React.Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                listType: 'playlist',
                list: 'PLU3C22gJCSskbtdldQwogacBQxY79FzfK',
                controls: 0,
                disablekb: 1,
                loop: 1,
                modestbranding: 1,
                rel: 0
            },
        };

        return <YouTube opts={opts} onReady={this._onReady} />;
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        // event.target.pauseVideo();
    }
};

export default Player;