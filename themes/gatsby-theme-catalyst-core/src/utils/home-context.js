import React, { useState, createContext } from "react"

export const HomeContext = createContext()

export const HomeProvider = ({ children }) => {
  const [isHome, setIsHome] = useState(null)
  return (
    <HomeContext.Provider value={[isHome, setIsHome]}>
      {children}
    </HomeContext.Provider>
  )
}
