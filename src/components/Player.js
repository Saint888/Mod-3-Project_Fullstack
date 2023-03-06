import React from "react"

function Player(props){

    
    return(
    
        <div className="detail">
            <div className="songImg">
                <img src={props.songs.img_src} alt="" />
            </div>
            <h3 className="songTitle">{props.songs.title}</h3>
            <h4 className="artistName">{props.songs.artist}</h4>
        </div>  
    
        
    )

    
}

export default Player;