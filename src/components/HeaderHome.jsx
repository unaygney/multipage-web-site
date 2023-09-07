import React, { useContext } from 'react';
import { MyContext  } from '../context/AppContext';
import { data } from '../context/constants';

function HeaderHome() {

  const { activePage} = useContext(MyContext)

  console.log(data.crew[0])
  

    return ( 
        <header className={`header ${activePage.replace('/', '')}`}>
            <div className="container home">
            <div className="left-side">
                   <h5 className='heading-5'>SO, YOU WANT TO TRAVEL TO</h5>
                   <h1 className='heading-1'>SPACE</h1>
                   <p className='body-text'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>

                </div>

                <div className="right-side">
                  <div className='big-circle'>
                 <span>EXPLORE</span>
                  </div>
                </div>
            </div>
        </header>
     );
}

export default HeaderHome;