import { useState } from "react";

function SubForm(){

    const [name, setName] = useState("");

    return(
    <>
    {/* onSubmit={handleSubmit}   */}
    <h3 className="subscription">Listen whenever, wherever!</h3>
    <p>Subcribe Now!</p>
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
      <input type="radio" id="contactChoice1" name="contact" value="email" />
      <label for="contactChoice1">Three</label>

      <input type="radio" id="contactChoice2" name="contact" value="phone" />
      <label for="contactChoice2">Six</label>

      <input type="radio" id="contactChoice3" name="contact" value="mail" />
      <label for="contactChoice3">Twelve</label>
    </div>


     
   
    </form>

    <button className="sub">Subscribe</button>
       
    </>  
    );
}

export default SubForm;