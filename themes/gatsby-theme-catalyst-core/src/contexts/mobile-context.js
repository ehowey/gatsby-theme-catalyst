import React, { useState, createContext, useEffect } from "react"
import { useCatalystConfig } from "../utils/use-catalyst-config"

export const MobileContext = createContext()

export const MobileProvider = props => {
  const [isMobile, setIsMobile] = useState(true)
  const isClient = typeof window === "object"
  const { mobileMenuBreakpoint } = useCatalystConfig()

  useEffect(
    () => {
      if (isClient) {
        const mq = window.matchMedia("(min-width:" + mobileMenuBreakpoint + ")")
        const getValue = () => {
          return !mq.matches
        }
        setIsMobile(getValue)
        const handler = () => setIsMobile(getValue)
        mq.addListener(handler)
        return () => mq.removeListener(handler)
      }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [] // Empty array ensures effect is only run on mount and unmount
  )
  console.log(isMobile)
  return (
    <MobileContext.Provider value={[isMobile, setIsMobile]}>
      {props.children}
    </MobileContext.Provider>
  )
}
