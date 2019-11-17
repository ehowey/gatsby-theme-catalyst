import React, { useState, createContext } from "react"
import { Location } from "@reach/router"

export const HomeContext = createContext()

export const HomeProvider = props => {
  const [isHome, setIsHome] = useState(true)

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
      {props.children}
    </HomeContext.Provider>
  )
}
