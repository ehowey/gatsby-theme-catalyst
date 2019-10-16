import React, { useState, createContext } from "react"

export const HeaderHeightContext = createContext()

export const HeaderHeightProvider = props => {
  const [headerHeight, setHeaderHeight] = useState(0)

  return (
    <HeaderHeightContext.Provider value={[headerHeight, setHeaderHeight]}>
      {props.children}
    </HeaderHeightContext.Provider>
  )
}
