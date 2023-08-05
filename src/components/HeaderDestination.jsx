import { useContext } from "react";
import { MyContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import moon from "../assets/destination/image-moon.png";

function HeaderDestination() {
  const { activePage ,sharedData ,removeLeadingSlash } = useContext(MyContext);



// console.log(removeLeadingSlash(activePage))
console.log(sharedData)
  return (
    <header className={`header ${activePage.replace("/", "")}`}>
      <div className="container destination">
        <div className="left-side">
          <h3 className="subheading-1" id="title">
            Pick your destination
          </h3>
          <img src={moon} alt="moon" />
        </div>
        <div className="right-side">
          <nav>
            <Link onClick={ (e) => {
              e.preventDefault()
              console.log(selam)
            } } className="nav-text">Moon</Link>
            <Link className="nav-text">Mars</Link>
            <Link className="nav-text">Europa</Link>
            <Link className="nav-text">Tıtan</Link>
          </nav>
          <h2 className="heading-2">MOON</h2>
          <p className="body-text">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>

           <span className="line"></span>

           <div className="info">
            <div className="info-distance">
              <h5 className="subheading-2">avg. distance</h5>
              <p className="subheading-info">384,400 KM</p>
            </div>

            <div className="info-travel-time">
              <h5 className="subheading-2"  >est. travel time</h5>
              <p className="subheading-info" >3 days</p>
            </div>
           </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderDestination;
