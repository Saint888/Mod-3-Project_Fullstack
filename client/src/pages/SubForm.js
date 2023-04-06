import { useState } from "react";

function SubForm(){

    const [name, setName] = useState("");

    return(
    <>
    {/* onSubmit={handleSubmit}   */}
    <h3 className="subscription">Listen whenever, wherever!</h3>
    <p>Sign Up Now!</p>
    <form > 
      <label htmlFor="name">Name</label>
      <input id="name" />

      <label htmlFor="email">Email</label>
      <input id="email" />

      {/* <label htmlFor="title">Title</label>
      <input id="title" /> */}

    <br />

    <legend>Please select subscription length (months):</legend>
    <div className="dot-choice">
      <input type="radio" id="Choice1" name="choice1" value="btn" />
      <label for="Choice1">Three</label>

      <input type="radio" id="Choice2" name="choice2" value="btn" />
      <label for="Choice2">Six</label>

      <input type="radio" id="Choice3" name="choice3" value="btn" />
      <label for="Choice3">Twelve</label>
    </div>


     
   
    </form>

    <button className="sub">Create Account</button>
       
    </>  
    );
}

export default SubForm;