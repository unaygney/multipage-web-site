import React from 'react'
import { createContext , useState  ,useEffect} from 'react';
import getData from './FetchApi'
import { useLocation } from 'react-router-dom';


const MyContext = createContext();

const AppContextProvider = ({ children }) => {
  const location = useLocation();
  const [activePage , setActivePage] = useState('')
  const [sharedData , setSharedData] = useState({})
  

  useEffect(() => {
    setActivePage(location.pathname);
   
  }, [location]);


  useEffect(() => {
    getData().then((response) => setSharedData(response));
  }, []);

  function removeLeadingSlash(text) {
    if (text.startsWith('/')) {
      return text.slice(1);
    }
    return text;
    
  }
  

    return (
      <MyContext.Provider value={{ sharedData , activePage , removeLeadingSlash }}>
        {children}
      </MyContext.Provider>
    );
  };


export {AppContextProvider , MyContext}