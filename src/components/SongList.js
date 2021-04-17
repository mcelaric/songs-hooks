import React from 'react';

const SongList = ( { songs, onSongSelect }) => {

    const renderedSongs = songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            onClick={() => onSongSelect(song)}
                            className="ui button primary"
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    
    return <div className="ui divided list">{renderedSongs}</div>
}

export default SongList;