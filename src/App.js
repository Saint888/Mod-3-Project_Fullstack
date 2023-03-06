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
      src: "./music/somebody-new.mp3"
    },
    {
      title: "4 U ft Kali Uchis",
      artist: "Don Toliver",
      img_src: "./images/song-3.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Time",
      artist: "Kaytranada",
      img_src: "./images/song-4.jpg",
      src: "./music/somebody-new.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > appData.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
    
  }, [currentSongIndex]);

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
