import { useContext } from "react";
import { MyContext } from "../context/AppContext";

function HeaderCrew() {

    const {sharedData , activePage} = useContext(MyContext)


    return ( 
        <header className={`header ${activePage.replace('/', '')}`}>
            <div className="container"></div>
        
        </header>
     );
}

export default HeaderCrew;