import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls';
import CurrentMusic from './CurrentMusic';

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (skip = true) => {
        if (skip) { //Checks if listner wants to skip 
            props.setCurrentSongIndex(() => {
                let item = props.currentSongIndex;
                item++;

                if (item > props.songs.length - 1) { // If skip, move once through array from current song.
                    item = 0;
                }

                return item; // Return 'next' song.
            });
        } else {
            props.setCurrentSongIndex(() => {
                let item = props.currentSongIndex; // Else, return to previous 'current' song.
                item--;

                if (item < 0) {
                    item = props.songs.length - 1; 
                }

                return item; // Return 'previous' song.
            });
        }
    }


    return (
        <div className="music">
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <h4>Now Playing: </h4>
            <CurrentMusic song={props.songs[props.currentSongIndex]} />
            <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            <p>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
        </div>
    )
}

export default Player;
