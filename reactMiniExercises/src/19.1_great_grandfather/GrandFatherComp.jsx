import React, { useState, createContext } from 'react'
import FatherComp from './FatherComp'

export const GrandFatherContext = createContext();

const GrandFatherComp = () => {
    const [value,setValue] = useState("someText from grandFather");


  return (
    <GrandFatherContext.Provider value={value}>
        <FatherComp/>
    </GrandFatherContext.Provider>
  )
}

export default GrandFatherComp
