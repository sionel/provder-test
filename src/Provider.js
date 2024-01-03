import React, { createContext, useContext, useState } from 'react'
import Progress from './Progress'


const MyContext = createContext();



function Provider({ children }) {

  const [progress, setProgress] = useState({ on: null, off: null })

  return (
    <MyContext.Provider value={{ progress }}><Progress setProgress={setProgress} />{children}</MyContext.Provider>
  )
}

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};


export default Provider