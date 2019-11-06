import React, { useState, createContext, useEffect } from "react"

export const HomeContext = createContext()

export const HomeProvider = props => {
  const [isHome, setIsHome] = useState(null)
  const isClient = typeof window === "object"
  // eslint-disable-next-line
  useEffect(() => {
    if (isClient && window.location.pathname === "/") {
      return setIsHome(true)
    } else {
      return setIsHome(false)
    }
  })

  return (
    <HomeContext.Provider value={[isHome, setIsHome]}>
      {props.children}
    </HomeContext.Provider>
  )
}
