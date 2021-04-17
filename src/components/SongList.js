import React from 'react';

const SongList = ( { songs, onSongSelect }) => {

    const renderedSongs = songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div>
                        <button 
                            onClick={() => onSongSelect(song)}
                            className="ui button primary"
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}<br /></div>
                </div>
            );
        });
    
    return <div>{renderedSongs}</div>
}

export default SongList;