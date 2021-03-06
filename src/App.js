import React, { useEffect, useState } from 'react';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';


const songs = [
  {
    title: 'The Sign',
    artist:'Ace Of Base',
    year:'1994',
    duration: '3:08'
  },
  {
    title: 'Bullet With Butterfly Wings',
    artist:'The Smashing Pumpkins',
    year:'1995',
    duration: '4:19'
  },
  {
    title: 'You Get What You Give',
    artist:'New Radicals',
    year:'1998',
    duration: '4:37'
  }  
];

const App = () => {
  const [selectedSong, setSelectedSong] = useState(null);
  
  useEffect (() => {
    setSelectedSong(selectedSong);
  }, [selectedSong]);

  return ( 
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide" ><SongList  onSongSelect={setSelectedSong} songs={songs} /></div>
        <div className="column eight wide" ><SongDetail song={selectedSong}/></div>
      </div>
    </div>
  );
};

export default App;

