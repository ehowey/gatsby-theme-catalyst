import React, { useState, createContext } from "react"

export const NavContext = createContext()

export const NavProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <NavContext.Provider value={[isNavOpen, setIsNavOpen]}>
      {children}
    </NavContext.Provider>
  )
}
