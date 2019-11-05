import React, { useState, createContext, useEffect } from "react"
import { useCatalystConfig } from "../utils/use-catalyst-config"

export const MobileContext = createContext()

export const MobileProvider = props => {
  const { mobileMenuBreakpoint } = useCatalystConfig()
  const mq = window.matchMedia("(min-width:" + mobileMenuBreakpoint + ")")
  const getValue = () => {
    return !mq.matches
  }
  const [isMobile, setIsMobile] = useState(getValue)

  useEffect(
    () => {
      const handler = () => setIsMobile(getValue)
      mq.addListener(handler)
      return () => mq.removeListener(handler)
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [] // Empty array ensures effect is only run on mount and unmount
  )

  return (
    <MobileContext.Provider value={[isMobile, setIsMobile]}>
      {props.children}
    </MobileContext.Provider>
  )
}
