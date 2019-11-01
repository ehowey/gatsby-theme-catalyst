import React, { useState, createContext } from "react"

export const MobileContext = createContext()

export const MobileProvider = props => {
  const [mobile, setMobile] = useState(false)
  return (
    <MobileContext.Provider value={[mobile, setMobile]}>
      {props.children}
    </MobileContext.Provider>
  )
}
