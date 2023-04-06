import { useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { createPost } from "../../services/postService";

function New() {

    // let subjectRef = useRef()
    // let bodyRef = useRef()
    // let navigate = useNavigate()

    // async function handleSubmit(e) {
    //     e.preventDefault()
    //     let post = {
    //         subject: subjectRef.current.value,
    //         body: bodyRef.current.value,
    //         user
    //     }
    //     await createPost(post)
    //     navigate('/music')
    // }

    return ( 
        <>
        {/* onSubmit={handleSubmit}   */}
        <h1 className="subscription">Help Us Grow!</h1>
        <div id ="subForm">
        <h3 className="signUp">Upload Music!</h3>
        <form action="/music" method="POST"> 
          <label htmlFor="name"><strong>Song Title</strong></label>
          <br/>
          <input id="name" />
    <br/>
          <label htmlFor="ttl"><strong>Song Artist</strong></label>
          <br/>
          <input id="ttl" />
    
          {/* <label htmlFor="title">Title</label>
          <input id="title" /> */}
    
        <br />
    
        <legend><strong>Please select song genre: </strong></legend>
        <div className="dot-choice">
          <input type="radio" id="Choice1" name="choice1" value="btn" />
          <label for="Choice1"><strong>HipHop</strong></label>
    
          <input type="radio" id="Choice2" name="choice2" value="btn" />
          <label for="Choice2"><strong>R&B</strong></label>
    
          <input type="radio" id="Choice3" name="choice3" value="btn" />
          <label for="Choice3"><strong>Jazz</strong></label>
          
          <input type="radio" id="Choice3" name="choice3" value="btn" />
          <label for="Choice4"><strong>Rock</strong></label>
        </div>
    
  
        <button id="sub"><strong>Upload Song</strong></button>
       
        
        </form>
        </div>
       
           
        </>
     );
}

export default New;