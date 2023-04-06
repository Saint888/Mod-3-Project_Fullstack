import React, {useState, useRef, useEffect} from 'react'
import { getAllSongs } from '../../services/songService';
// import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'

function Index() {

     const [songs, setSongs] = useState([])

    useEffect(() => {
      async function loadData() {
          const data = await getAllSongs()
          setSongs(data)
      }
      loadData()
  }, [])
        console.log(songs)



    return (

        <div  >
        <h1 className='musicList'>Music</h1>
        <h3 className='musicList'>Listen whenever, wherever!</h3>
        <div className="App">
        <ul id = 'the-list'>
            {songs.map((song, index) => 
                <li className='songChoice' key={index}>
                    <a href={`/music/${song._id}`}><strong><h3 className='choice1'>{song.title}</h3>
                    <p className='choice2'>{song.artist}</p></strong></a>
                    <label htmlFor="fav"><strong className='fav'>Favorite:</strong></label>
                    <input  type="checkbox" id="fav" name="favorite" /><br />

                    {/* <p>{props.result.favorite ? 'Favorite' : 'Unfavorite'}</p> */}
                </li>
            )}
        </ul>
        </div>
        {/* <a href='/music/new'>
        <button>Subscribe</button>
        </a> */}


        </div>
        
    )
}

export default Index;
