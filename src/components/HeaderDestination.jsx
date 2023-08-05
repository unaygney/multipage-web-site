import { useContext } from "react";
import { MyContext } from "../context/AppContext";

function HeaderDestination() {
    const {sharedData , activePage} = useContext(MyContext)

    return ( 
        <header className={`header ${activePage.replace('/', '')}`}>


        </header>
     );
}

export default HeaderDestination;