import { Link } from "react-router-dom";
import { useState } from "react";
import { hasPointerEvents } from "@testing-library/user-event/dist/utils";

function Nav(){

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return(
    <header className="navigation"> 
            <a href="/" className="brand-name">
            <h4>CodeMusic</h4>
            </a>
        <p className="current-song"><strong>Now Playing:</strong></p>
        <button className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
        <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={isNavExpanded ? "nav-bar expanded" : "nav-bar"}>
            {/* <img src='' alt='' /> */}
            <li> <Link className="link" to='/'>Home</Link></li>
            <li> <Link className="link" to='/MusicList'>My Music</Link></li>
            <li> <Link className="link" to='/SubForm'>Subscribe</Link></li>
        </div>
    
    </header>
 
    );
}

export default Nav;