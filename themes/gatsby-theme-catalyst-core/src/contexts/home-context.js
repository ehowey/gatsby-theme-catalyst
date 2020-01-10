import React, { useState, createContext } from "react"
import { Location } from "@reach/router"

export const HomeContext = createContext()

export const HomeProvider = ({ children }) => {
  const [isHome, setIsHome] = useState(null)

  return (
    <HomeContext.Provider value={[isHome, setIsHome]}>
      <Location>
        {({ location }) => {
          if (location.pathname === "/") {
            setIsHome(true)
          } else {
            setIsHome(false)
          }
        }}
      </Location>
      {children}
    </HomeContext.Provider>
  )
}
