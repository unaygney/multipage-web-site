import { useContext, useState } from "react";
import { MyContext } from "../context/AppContext";
import { Link } from "react-router-dom";


function HeaderDestination() {
  const { activePage, sharedData } = useContext(MyContext);

  const [number, setNumber] = useState("0");

  const handleClick = (index, event) => {
    event.preventDefault();
    setNumber(index);
  };

  const destSharedData = sharedData.destinations[number];

  return (
    <header className={`header ${activePage.replace("/", "")}`}>
      <div className="container destination">
        <div className="left-side">
          <h3 className="subheading-1" id="title">
            Pick your destination
          </h3>
          <img src={destSharedData.images.png} alt="moon" />
        </div>
        <div className="right-side">
          <nav>
            <Link onClick={(e) => handleClick(0, e)} className="nav-text">
              Moon
            </Link>
            <Link onClick={(e) => handleClick(1, e)} className="nav-text">
              Mars
            </Link>
            <Link onClick={(e) => handleClick(2, e)} className="nav-text">
              Europa
            </Link>
            <Link onClick={(e) => handleClick(3, e)} className="nav-text">
              Tıtan
            </Link>
          </nav>
          <h2 className="heading-2">{destSharedData.name}</h2>

          <p className="body-text">{destSharedData.description}</p>

          <span className="line"></span>

          <div className="info">
            <div className="info-distance">
              <h5 className="subheading-2">avg. distance</h5>
              <p className="subheading-info">{destSharedData.distance}</p>
            </div>

            <div className="info-travel-time">
              <h5 className="subheading-2">est. travel time</h5>
              <p className="subheading-info">{destSharedData.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderDestination;
