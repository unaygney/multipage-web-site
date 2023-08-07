import { useContext, useState, useEffect } from "react";
import { MyContext } from "../context/AppContext";
import { Link } from "react-router-dom";

function HeaderTechnology() {
  const { sharedData, activePage } = useContext(MyContext);

  const [number, setNumber] = useState("0");

  const handleClick = (index, event) => {
    event.preventDefault();
    setNumber(index);
  };

  useEffect(() => {
    setNumber(0);
  }, []);

  const sharedDataTech = sharedData.technology[number];


  // deneme

  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Komponentin kaldırılması durumunda event listener'ı temizle
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const imageSrc = isPortrait
  ? sharedDataTech.images.landscape
  : sharedDataTech.images.portrait;
  
  return (
    <header className={`header ${activePage.replace("/", "")}`}>
      <div className="container tech">
        <div className="left-side">
          <h3 className="subheading-1" id="title">
            SPACE LAUNCH 101
          </h3>

          <div className="content">
            <nav>
              <Link
                onClick={(e) => handleClick(0, e)}
                className={`${number === 0 ? "active" : ""}`}
              >
                1
              </Link>
              <Link
                onClick={(e) => handleClick(1, e)}
                className={`${number === 1 ? "active" : ""}`}
              >
                2
              </Link>
              <Link
                onClick={(e) => handleClick(2, e)}
                className={`${number === 2 ? "active" : ""}`}
              >
                3
              </Link>
            </nav>

            <div className="content-side">
              <h4>THE TERMINOLOGY…</h4>
              <h3 className="heading-3">{sharedDataTech.name}</h3>
              <p className="body-text">{sharedDataTech.description}</p>
            </div>
          </div>
        </div>
        <div className="right-side">
          <img src={imageSrc} alt="" />
        </div>
      </div>
    </header>
  );
}

export default HeaderTechnology;
