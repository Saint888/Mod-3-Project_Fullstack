import './App.css';
import './index.css';
import Home from './pages/Hompage'
import MusicList from './pages/MusicList';
import SubForm from './pages/SubForm';
import Player from './components/Player'
import Nav from './components/Nav';
import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import { baseUrl } from './config';

function App() {

  // const [appData, setAppData] = useState([]);

  const [songs] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./music/somebody-new.mp3"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "./music/somebody-new.mp3"
    }
  ]);


  // let key = '';
  // let url = '';

  // useEffect(() => {
  //   fetch(`${baseUrl}/song`)
  //   .then((response) => response.json())
  //     .then((appData) => {
  //       console.log({appData});
  //       setAppData(appData)
  //     })/*setSongs(data));*/
  //     .catch(error =>{
  //       console.log({error})
  //     })
  // }, []);

  const [currentSong, setCurrentSong ] = useState(0);
  const [nextSong, setNextSong ] = useState(0);

  useEffect(() => {
    setNextSong(() => {
      if (currentSong + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSong + 1;
      }
    });
  }, [currentSong]);

  
  return (
    <div className="App">
      <Nav />
      <Player
      
      />
      <Routes>
        <Route path='/' element={<Home currentSongIndex={currentSong} 
        setCurrentSong={setCurrentSong} 
        nextSong={nextSong}
        songs={songs} />} />
        <Route path='/MusicList' element={<MusicList />} />
        <Route path='/SubForm' element={<SubForm/>} />
      </Routes>
      
    </div>
  )

}

export default App;
