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

      <label htmlFor="title">Title</label>
      <input id="title" />

      <label htmlFor="email">Email</label>
      <input id="email" />
   
    </form>

    <button>Subscribe</button>
       
    </>  
    );
}

export default SubForm;