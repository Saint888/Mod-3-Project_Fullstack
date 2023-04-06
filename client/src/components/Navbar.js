import { Link } from "react-router-dom";
import { useState } from "react";


function Navbar({ user, setUser }) {
  
  const logout = () => {
    localStorage.removeItem("token")
    setUser({})
  };

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (

    <header className="navigation"> 
            <a href="/music" className="brand-name">
            <h3>CodeMusic</h3>
            </a>
        {/* <p className="current-song"><strong>Now Playing:</strong>{props.songs[props.currentSongIndex]}</p> */}
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
    <ul className="user-auth">
      {user ? 
        <>
          <li style={{ color: "white" }}>Welcome {user}!</li>
          {/* <li className="posts-nav">
            <Link to="/music">Posts</Link>
          </li> */}
          <li> <Link to='/music'>Music</Link></li>
          {/* <li> <Link to='/music/:id'>Now Playing</Link></li> */}
          <li> <Link to='/music/new'>Upload</Link></li>
          <li onClick={logout}>
            <Link to="/login">Logout</Link>
          </li>
          
        </>
       : 
        <>
          {/* <li className="posts-nav">
            <Link to="/music">Posts</Link> */}
          {/* </li> */}
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          
        </>
      }
    </ul>
    </div>
</header>
  );
}

export default Navbar;