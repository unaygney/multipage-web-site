import { useContext } from "react";
import { MyContext } from "../context/AppContext";

function HeaderTechnology() {

    const {sharedData , activePage , removeLeadingSlash} = useContext(MyContext)

    console.log(removeLeadingSlash(activePage))
    return ( 
        <header className={`header ${activePage.replace('/', '')}`}>
 <div className="container">
        <div className="left-side">
        <h3 className="subheading-1" id="title">SPACE LAUNCH 101</h3>
        </div>
        <div className="right-side"></div>
      </div>

        </header>
     );
}

export default HeaderTechnology;