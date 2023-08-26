import logo from "../image/hotstarlogo.svg"
import '../style/navbar.css'
import { Link } from "react-router-dom"
const Navbar=()=>{
  return(
   <div className="navabar" >
    <div className="log mt-1">
    <img src={logo} alt="" />
    <Link to='https://www.hotstar.com/in/paywall'><p>Subscribe></p></Link>
    
    </div>

    <div className="parentlink">
    <div className="link">
     <Link to="/watchlist"> <span id="symbol" class="material-symbols-outlined py-0 ">
       person
       </span>  <span id="linkname">My Space</span></Link> 
    </div>
    <div className="link">
    <Link to='/search'><span id="symbol" class="material-symbols-outlined">
    search
     </span> <span id="linkname">Search</span></Link>
    </div>
    <div className="link ">
    <Link to='/home'><span id="symbol" class="material-symbols-outlined">
    home
    </span><span id="linkname">Home</span></Link>
    </div>
    <div className="link ">
    <Link to='/tv'><span id="symbol" class="material-symbols-outlined">
    live_tv </span><span id="linkname">TV</span></Link>
    
    </div>

    <div className="link ">
      <Link to='/movies'><span id="symbol" class="material-symbols-outlined">
    movie
    </span><span id="linkname">Movies</span></Link>
    </div>

    <div className="link ">
    <Link to='/sports'><span id="symbol" class="material-symbols-outlined">
    sports_baseball
    </span><span id="linkname">Sports</span></Link>
    </div>
    </div>
    </div>
   
  )
}
export default Navbar