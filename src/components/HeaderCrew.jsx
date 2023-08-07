import { useContext, useState, useEffect } from "react";
import { MyContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import getData from "../context/FetchApi";


function HeaderCrew() {
  const { sharedData, activePage } = useContext(MyContext);
  const [crewNumber, setCrewNumber] = useState("0");

  const sharedCrewData = sharedData.crew[crewNumber];
  
 useEffect(() => {
  sharedCrewData
 }, [])



  useEffect(() => {
    setCrewNumber(0)
  } , [])


  const handleClick = (index, event) => {
    event.preventDefault();
    setCrewNumber(index);
  };




  return (
    <header className={`header ${activePage.replace("/", "")}`}>
      <div className="container crew">
        <div className="left-side">
          <h3 className="subheading-1" id="title">
            Meet your crew
          </h3>
          <h3 className="heading-4">{sharedCrewData.role}</h3>
          <h5 className="heading-3">{sharedCrewData.name}</h5>
          <p className="body-text">
        {sharedCrewData.bio}
          </p>
          <nav>
            <Link
              onClick={(e) => handleClick(0, e)}
              className={`nav-text ${crewNumber === 0 ? "active" : ""}`}
              to="#"
            ></Link>
            <Link
              onClick={(e) => handleClick(1, e)}
              className={`nav-text ${crewNumber === 1 ? "active" : ""}`}
              to="#"
            ></Link>
            <Link
              onClick={(e) => handleClick(2, e)}
              className={`nav-text ${crewNumber === 2 ? "active" : ""}`}
              to="#"
            ></Link>
            <Link
              onClick={(e) => handleClick(3, e)}
              className={`nav-text ${crewNumber === 3 ? "active" : ""}`}
              to="#"
            ></Link>
          </nav>
        </div>

        <div className="right-side">
          <img src={sharedCrewData.images.png} alt="" />
        </div>
      </div>
    </header>
  );
}

export default HeaderCrew;


