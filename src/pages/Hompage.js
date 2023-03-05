import Nav from '../components/Nav';

function Home(){
    return(
    <>   
        <div className='nowPlaying'><p>Now Playing</p></div>
            <div className='songImg'><img src=''></img></div>
                <div className='songTitle'><h2>Title</h2></div>
                     <div className='artistName'><h5>Name</h5></div>
                         <div className='controls'>
                             <button className='left'><img className='back' src='next-arrow1.png' alt='Back'/></button>
                             <button className='middle'><img className='play' src='play-pause.png' alt='Play/Pause'/></button>
                             <button className='right'><img className='next' src='next-arrow2.png' alt='Next'/></button>
                         </div>
      </>  
    );
}

export default Home;