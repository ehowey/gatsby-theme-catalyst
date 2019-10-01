import React, { createContext, useContext, useState, useEffect } from "react"

const WindowSizeContext = createContext(null)

export const WindowSizeProvider = ({ children }) => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <WindowSizeContext.Provider value={size}>
      {children}
    </WindowSizeContext.Provider>
  )
}

export const useWindowSize = () => useContext(WindowSizeContext)
