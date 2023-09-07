import React from 'react'
import { createContext , useState  ,useEffect} from 'react';
import { useLocation } from 'react-router-dom';


const MyContext = createContext();

const AppContextProvider = ({ children }) => {
  const location = useLocation();
  const [activePage , setActivePage] = useState('')

  

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);



  function removeLeadingSlash(text) {
    if (text.startsWith('/')) {
      return text.slice(1);
    }
    return text;
    
  }
  

    return (
      <MyContext.Provider value={{ activePage  }}>
        {children}
      </MyContext.Provider>
    );
  };


export {AppContextProvider , MyContext}