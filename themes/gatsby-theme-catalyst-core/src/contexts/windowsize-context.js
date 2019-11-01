import React, { createContext, useContext, useState, useEffect } from "react"

const WindowSizeContext = createContext(null)

export const WindowSizeProvider = ({ children }) => {
  const isClient = typeof window === "object"

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(
    () => {
      if (!isClient) {
        return false
      }

      const handleResize = () => {
        setWindowSize(getSize())
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ) // Empty array ensures that effect is only run on mount and unmount

  return (
    <WindowSizeContext.Provider value={windowSize}>
      {children}
    </WindowSizeContext.Provider>
  )
}

export const useWindowSize = () => useContext(WindowSizeContext)
