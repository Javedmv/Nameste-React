import {IMG_CDN_URL} from "../Constants"

const Title = () => {
    return (
      <a href="/">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/77b13d58799f70f670be31e6fe53374e" className="logo" alt="logo"></img>
      </a>
    )
  }
  
  const Header = () => (
    <div className="header">
        <Title/>
        <div className="nav-bar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
    </div>
  )
  export default Header;