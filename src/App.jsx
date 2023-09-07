import { Route, Routes  } from "react-router-dom";
import "./main.css";
// Pages
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

// Components

function App() {
  return (
    <>
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/*" element={<Home />} />
   
      </Routes>
    </>
  );
}

export default App;
