import Nav from '../components/Nav';
import { useEffect, useRef, useState } from 'react';
import Player from '../components/Player';

function Home(props){

    const audioEl = useRef(null);
    const [isCurrent, setIsCurrent] = useState(false);

    useEffect(() => {
        if (isCurrent) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSong(() => {
                let item = props.currentSong;
                item++;

                if (item > props.songs.length - 1) {
                    item = 0;
                }

                return item;
            });
        } else {
            props.setCurrentSong(() => {
                let item = props.currentSong;
                item--;

                if (item < 0) {
                    item = props.songs.length - 1;
                }

                return item;
            });
        }
    }

    return(
        <>   
            <div className='nowPlaying'>
                <audio src={props.songs[props.currentSong].src}></audio>
                {/* <p><strong>Now Playing:</strong></p> */}
                    <Player song={props.songs[props.currentSong]} />
                        <div className='controls'>
                            <button className='skip-btn' onClick={() => props.SkipSong(false)}><img className='back' src='next-arrow1.png' alt='Back'/></button>
                            <button className='middle' onClick={() => props.setIsCurrent(!props.isCurrent)}><img className='play' src='play-pause.png' alt='Play/Pause'/></button>
                            <button className='skip-btn' onClick={() => props.SkipSong()}><img className='next' src='next-arrow2.png' alt='Next'/></button>
                    </div>

            </div> 
           
            
                            
      </>  
    );
}

export default Home;