import { userInfo } from './services/userService';
import './index.css';
import {useState, useEffect} from 'react';
import Player from './pages/music/Index';
import { Routes, Route, Navigate } from 'react-router-dom'; // Navigate
import Navbar from './components/Navbar';
import Index from './pages/music/Index';
import Show from './pages/music/Show';
import Register from './pages/users/Register';
import Login from './pages/users/Login';
// import FavList from './pages/FavList';
// import SubForm from './pages/SubForm';
import Nav from './components/Nav';
// import { baseUrl } from './config';

function App() {


  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      
      let token = localStorage.getItem("token")

      if (token) {
          getLoggedInUser()
      } else {
          setIsLoading(false)
      }

      async function getLoggedInUser() {
          const user = await userInfo()
          setUser(user)
          setIsLoading(false)
      }

  }, [])

  
  // async function getAllSongs() {
  //     const axios = customAxios()
  //     try {
  //         const response = await axios.get('/music')
  //         return response.data
  //     } catch(err) {
  //         console.log(err.message)
  //         return []
  //     }
  // }

  //   const [appData, setAppData] = useState({})

  //   useEffect(() => {
  //     async function loadData() {
  //         const data = await getAllSongs()
  //         setAppData(data)
  //     }
  //     loadData()
  // }, [])


  // const [currentSongIndex, setCurrentSongIndex] = useState(0);
  // const [nextSongIndex, setNextSongIndex] = useState(0);

  // useEffect(() => {
  //   setNextSongIndex(() => { // Anytime current song chsnges we need 'next que' to update as well.
  //     if (currentSongIndex + 1 > appData.length - 1) { // If current song skips next song and amount of songs left is more than whats left in array, then we got back to 0 (beginning of array).
  //       return 0;
  //     } else {
  //       return currentSongIndex + 1; // Otherwise -> return 'next' song.
  //     }
  //   });
    
  // }, [currentSongIndex]); // As current song update changes, the function will envoke.

  let loggedIn = user.username

  return (
    <div className="App">
      {/* <Nav />   */}
      <Navbar user={loggedIn} setUser={setUser} />
      <Routes>
          {/* <Route path='/music/:id' element={<ShowPost user={loggedIn} />} /> */}
      <Route path='/music' element={<Index user={loggedIn}/>} />
      {loggedIn ?
      <>
      <Route path='/music/:id' element={<Show user={loggedIn} />} />
      {!isLoading && <Route path='*' element={<Navigate to='/music' />} />}
      </>
      :
      <>
        <Route path='/register' element={<Register setUser={setUser} />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        {!isLoading && <Route path='*' element={<Navigate to='/login' />} />}
      </> 
      }
        {/* <Route path='/MusicList' element={<MusicList />} />
        <Route path='/SubForm' element={<SubForm/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
