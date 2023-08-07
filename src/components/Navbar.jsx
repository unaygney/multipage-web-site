// Logo
import Logo from "../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
import BurgerLogo from "../assets/shared/hamburger.svg";
import Close from "../assets/shared/icon-close.svg";
import { useState } from "react";

function Navbar() {
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsLinksOpen(!isLinksOpen);
  };

  const handleCloseClick = () => {
    setIsLinksOpen(!isLinksOpen);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <div className="burger">
        <button onClick={handleBurgerClick} className="btn-burger">
          <img src={BurgerLogo} alt="" />
        </button>
      </div>

      <ul className={isLinksOpen ? "links open" : "links"}>
        <button onClick={handleCloseClick} className="btn-close">
          <img src={Close} alt="" />
        </button>
        <li>
          <NavLink to={"/"}>
            <span className="bold-text">00</span>Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/destination"}>
            <span className="bold-text">01</span>DESTINATION
          </NavLink>
        </li>
        <li>
          <NavLink to={"/crew"}>
            <span className="bold-text">02</span>CREW
          </NavLink>
        </li>
        <li>
          <NavLink to={"/technology"}>
            <span className="bold-text">03</span>TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
