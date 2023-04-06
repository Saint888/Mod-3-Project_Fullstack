import React, {useState, useRef, useEffect} from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"
import Controls from '../../components/Controls';
import CurrentMusic from '../../components/CurrentMusic';
import { getSong } from '../../services/songService';


function Show() {

     const [songs, setSong] = useState([])

     const navigate = useNavigate()
     const params = useParams()

     useEffect(() => {
        async function loadData() {
            const data = await getSong(params.id)
            if (!data) navigate('/music')
            setSong(data)
        }
        loadData()
    }, [params.id])
    
        console.log(songs)

      
                const [currentSongIndex, setCurrentSongIndex] = useState(0);
                const [nextSongIndex, setNextSongIndex] = useState(0);

                useEffect(() => {
                    setNextSongIndex(() => { // Anytime current song chsnges we need 'next que' to update as well.
                    if (currentSongIndex + 1 > songs.length - 1) { // If current song skips next song and amount of songs left is more than whats left in array, then we got back to 0 (beginning of array).
                        return 0;
                    } else {
                        return currentSongIndex + 1; // Otherwise -> return 'next' song.
                    }
                    });
                    
                }, [currentSongIndex]); // As current song update changes, the function will envoke.

                console.log(currentSongIndex)
                console.log(songs)

            const audioElement = useRef();
            const [isPlaying, setIsPlaying] = useState(false);
                useEffect(() => {
                    if (isPlaying) {
                    audioElement.current.play();
                    } else {
                        // audioElement.current.pause();
                    }
                });

    const SkipSong = (skip = true) => {
        if (skip) { //Checks if listner wants to skip 
            setCurrentSongIndex(() => {
                let item = currentSongIndex;
                item++;

                if (item > songs.length - 1) { // If skip, move once through array from current song.
                    item = 0;
                }

                return item; // Return 'next' song.
            });
        } else {
            setCurrentSongIndex(() => {
                let item = currentSongIndex; // Else, return to previous 'current' song.
                item--;

                if (item < 0) {
                    item = songs.length - 1; 
                }

                return item; // Return 'previous' song.
            });
        }
    }


    return (
        <div className="music">
           {songs.map((songs, index) =>  
            <div >
           <Link to={`/music/${songs._id}`} key = {index}>
            <audio src={songs[currentSongIndex]} ref={audioElement}></audio>
            <h4>Now Playing: </h4>
            <CurrentMusic song={songs[currentSongIndex]} />
            <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            <p>Next up: <span>{songs[nextSongIndex].title} by {songs[nextSongIndex].artist}</span></p>
             </Link>
            </div>
             )}
        </div>
        
    )
}

export default Show;