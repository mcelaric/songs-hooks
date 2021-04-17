import React from 'react';

const SongDetail = ({ song }) => {
    if(!song){
        return <div>Select a song please</div>;
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}<br/> 
                Artist: {song.artist}
            </p>   
        </div>
    );
}

export default SongDetail;