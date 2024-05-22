import { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({children}) => {
  //declare state variables for context here
 
  useEffect(() => {
    //useEffect for on app load
   
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        //put Context values here
       
      }}
    >
      {children}
    </GlobalContext.Provider>
  )

}

export default GlobalProvider;