// Logo
import Logo from '../assets/shared/logo.svg'
import { NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import Destination from '../pages/Destination';
import Crew from '../pages/Crew';
import Technology from '../pages/Technology';


function Navbar() {
    return ( 
        <nav className="navbar">

            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>

            <ul className='links'>
                <li><NavLink to={'/'}><span className='bold-text'>00</span>Home</NavLink></li>
                <li><NavLink to={'/destination'}><span className='bold-text'>01</span>DESTINATION</NavLink></li>
                <li><NavLink to={'/crew'}><span className='bold-text'>02</span>CREW</NavLink></li>
                <li><NavLink to={'/technology'}><span className='bold-text'>03</span>TECHNOLOGY</NavLink></li>
            </ul>

        </nav>
     );
}

export default Navbar;