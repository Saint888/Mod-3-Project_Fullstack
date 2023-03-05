import { Link } from "react-router-dom";

function Nav(){
    return(
    <header>
        <div className="nav-bar">
            <img src='' alt='' />
            <li> <Link className="link" to='/'>Home</Link></li>
            <li> <Link className="link" to='/MusicList'>My Music</Link></li>
            <li> <Link className="link" to='/SubForm'>Subscribe</Link></li>
        </div>
    </header>   
 
    );
}

export default Nav;