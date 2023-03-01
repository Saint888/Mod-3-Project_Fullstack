import './App.css';
import './index.css';
import { useEffect, useState } from 'react';


function App() {

  const [song, setSongs] = useState([]);

  let key = '';
  let url = '';

  // useEffect(() => {
  //   fetch(url)
  //   .then((response) => response.json())
  //     .then((data) => setSongs(data));
  // }, []);
  
  return (
    <div className="App">
      <div className='nowPlaying'><p>Now Playing</p></div>
      <div className='songImg'><img src=''></img></div>
      <div className='songTitle'><h2>Title</h2></div>
      <div className='artistName'><h5>Name</h5></div>
      <div className='controls'>
        <button className='left'>{'<'}</button>
        <button className='middle'>Play/Pause</button>
        <button className='right'>{'>'}</button>
      </div>
    </div>
  );
}

export default App;
