import './App.css';
import './index.css';
import Home from './pages/Hompage'
import MusicList from './pages/MusicList';
import SubForm from './pages/SubForm';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import { baseUrl } from './config';


function App() {

  const [appData, setAppData] = useState([]);

  // let key = '';
  // let url = '';

  useEffect(() => {
    fetch(`${baseUrl}/song`)
    .then((response) => response.json())
      .then((appData) => {
        console.log({appData});
        setAppData(appData)
      })/*setSongs(data));*/
      .catch(error =>{
        console.log({error})
      })
  }, []);
  
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/MusicList' element={<MusicList />} />
        <Route path='/SubForm' element={<SubForm/>} />
      </Routes>
      
    </div>
  )

}

export default App;
