import './App.css';
import './index.css';
import {useState, useEffect} from 'react';
import Player from './components/Player';
import { Routes, Route } from 'react-router-dom';
import MusicList from './pages/MusicList';
import SubForm from './pages/SubForm';
import Nav from './components/Nav';

// import { baseUrl } from './config';

function App() {

  // const [appData, setAppData] = useState();

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


  const [appData] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Private Valet",
      artist: "Larry June",
      img_src: "./images/song-2.jpg",
      src: "./music/Larry-June-PrivateValet.mp3"
    },
    {
      title: "4 U ft Kali Uchis",
      artist: "Don Toliver",
      img_src: "./images/song-3.jpg",
      src: "./music/Don Toliver-DonToliver-4-Me[Official Audio].mp3"
    },
    {
      title: "Time ft HER",
      artist: "Kaytranada",
      img_src: "./images/song-4.jpg",
      src: "./music/KAYTRANADA-Intimidated.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => { // Anytime current song chsnges we need 'next que' to update as well.
      if (currentSongIndex + 1 > appData.length - 1) { // If current song skips next song and amount of songs left is more than whats left in array, then we got back to 0 (beginning of array).
        return 0;
      } else {
        return currentSongIndex + 1; // Otherwise -> return 'next' song.
      }
    });
    
  }, [currentSongIndex]); // As current song update changes, the function will envoke.

  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route path='/' element={<Player currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={appData} />} /> 
        <Route path='/MusicList' element={<MusicList />} />
        <Route path='/SubForm' element={<SubForm/>} />
      </Routes>
    </div>
  );
}

export default App;
