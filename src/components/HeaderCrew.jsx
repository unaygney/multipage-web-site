import { useContext } from "react";
import { MyContext } from "../context/AppContext";
import Douglas from '../assets/crew/image-douglas-hurley.png'

function HeaderCrew() {

    const {sharedData , activePage , removeLeadingSlash} = useContext(MyContext)

    console.log(removeLeadingSlash(activePage))

    return ( 
        <header className={`header ${activePage.replace('/', '')}`}>
            <div className="container">
        <div className="left-side">
        <h3 className="subheading-1" id="title">Meet your crew</h3>
        <p>merhaba ben </p>
        <p>{sharedData.crew[0].name}</p>
        </div>
        <div className="right-side">
            <img src={Douglas} alt="" />
        </div>
      </div>
        
        </header>
     );
}

export default HeaderCrew;