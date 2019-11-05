import React, { useState, createContext } from "react"

export const NavContext = createContext()

export const NavProvider = props => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <NavContext.Provider value={[isNavOpen, setIsNavOpen]}>
      {props.children}
    </NavContext.Provider>
  )
}
