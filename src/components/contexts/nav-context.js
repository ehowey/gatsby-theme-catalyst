import React, { useState, createContext } from "react"

export const NavContext = createContext()

export const NavProvider = props => {
  const [open, setOpen] = useState(false)

  return (
    <NavContext.Provider value={[open, setOpen]}>
      {props.children}
    </NavContext.Provider>
  )
}
