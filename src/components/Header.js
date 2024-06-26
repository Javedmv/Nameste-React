import { useState } from "react";
import {IMG_CDN_URL} from "../Constants"
import {Link} from 'react-router-dom'


const loggedInUser = () =>{
  // API CALL TO CHECK IF USER IS LOGEDIN
  return true;
}

const Title = () => {
    return (
      <a href="/">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/77b13d58799f70f670be31e6fe53374e" className="logo" alt="logo"></img>
      </a>
    )
  }
  
  const Header = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(true);

    return (
      <div className="header">
        <Title/>
        <div className="nav-bar">
          <ul>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
        { 
          isLoggedIn?( <button onClick={()=> setIsLoggedIn(false) }>Login</button> ) :
          ( <button onClick={()=> setIsLoggedIn(true) }>Logout</button> )
        }
    </div>
    )
  };
  export default Header;