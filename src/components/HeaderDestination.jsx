import { useContext, useState, useEffect } from "react";
import { MyContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { data } from "../context/constants";

function HeaderDestination() {
  const { activePage } = useContext(MyContext);

  const [number, setNumber] = useState("0");

  const handleClick = (index, event) => {
    event.preventDefault();
    setNumber(index);
  };
  useEffect(() => {
    setNumber(0);
  }, []);

  const destData = data.destinations[number];

  return (
    <header className={`header ${activePage.replace("/", "")}`}>
      <div className="container destination">
        <div className="left-side">
          <h3 className="subheading-1" id="title">
            Pick your destination
          </h3>
          <img src={destData.images.png} alt="moon" />
        </div>
        <div className="right-side">
          <nav>
            <Link
              to="#"
              onClick={(e) => handleClick(0, e)}
              className={`nav-text ${number === 0 ? "active" : ""}`}
            >
              Moon
            </Link>
            <Link
              to="#"
              onClick={(e) => handleClick(1, e)}
              className={`nav-text ${number === 1 ? "active" : ""}`}
            >
              Mars
            </Link>
            <Link
              to="#"
              onClick={(e) => handleClick(2, e)}
              className={`nav-text ${number === 2 ? "active" : ""}`}
            >
              Europa
            </Link>
            <Link
              to="#"
              onClick={(e) => handleClick(3, e)}
              className={`nav-text ${number === 3 ? "active" : ""}`}
            >
              Titan
            </Link>
          </nav>
          <h2 className="heading-2">{destData?.name}</h2>

          <p className="body-text">{destData?.description}</p>

          <span className="line"></span>

          <div className="info">
            <div className="info-distance">
              <h5 className="subheading-2">avg. distance</h5>
              <p className="subheading-info">{destData?.distance}</p>
            </div>

            <div className="info-travel-time">
              <h5 className="subheading-2">est. travel time</h5>
              <p className="subheading-info">{destData?.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderDestination;
