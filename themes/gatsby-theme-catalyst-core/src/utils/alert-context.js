import React, { useState, createContext } from "react"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"

export const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
  const { useAlertBanner } = useCatalystConfig()
  const [displayAlert, setDisplayAlert] = useState(useAlertBanner)
  return (
    <AlertContext.Provider value={[displayAlert, setDisplayAlert]}>
      {children}
    </AlertContext.Provider>
  )
}
