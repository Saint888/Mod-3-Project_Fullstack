import React from 'react'


function Controls(props) {
    return (
        <div className="music--controls">
            <button className="skip-btn" onClick={() => props.SkipSong(false)}>
                <img className='back' src='next-arrow1.png' alt='Back'/>
            </button>
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
            <img className='play' src='play-pause.png' alt='Play/Pause'/>
            </button>
            <button className="skip-btn" onClick={() => props.SkipSong()}>
            <img className='next' src='next-arrow2.png' alt='Next'/>
            </button>
        </div>
    )
}

export default Controls
