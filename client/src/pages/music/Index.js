import React, {useState, useRef, useEffect} from 'react'
import Controls from '../../components/Controls';
import CurrentMusic from '../../components/CurrentMusic';
import { customAxios, customAxiosWithAuth } from '../../services/api'
function Index() {

async function getAllSongs() {

        const axios = customAxios()
        try {
            const response = await axios.get('/music')
            return response.data
        } catch(err) {
            console.log(err.message)
            return []
        }
    }

    const [appData, setAppData] = useState({})

    useEffect(() => {
      async function loadData() {
          const data = await getAllSongs()
          setAppData(data)
      }
      loadData()
  }, [])
        
        const audioEl = useRef(null);
        const [isPlaying, setIsPlaying] = useState(false);

        useEffect(() => {
            if (isPlaying) {
                audioEl.current.play();
            } else {
                audioEl.current.pause();
            }
        });


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

    const SkipSong = (skip = true) => {
        if (skip) { //Checks if listner wants to skip 
            setCurrentSongIndex(() => {
                let item = currentSongIndex;
                item++;

                if (item > appData.length - 1) { // If skip, move once through array from current song.
                    item = 0;
                }

                return item; // Return 'next' song.
            });
        } else {
            setCurrentSongIndex(() => {
                let item = currentSongIndex; // Else, return to previous 'current' song.
                item--;

                if (item < 0) {
                    item = appData.length - 1; 
                }

                return item; // Return 'previous' song.
            });
        }
    }


    return (
        <div className="music">
            <audio src={appData[currentSongIndex].src} ref={audioEl}></audio>
            <h4>Now Playing: </h4>
            <CurrentMusic song={appData[currentSongIndex]} />
            <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            <p>Next up: <span>{appData[nextSongIndex].title} by {appData[nextSongIndex].artist}</span></p>
        </div>
    )
}

export default Index;
