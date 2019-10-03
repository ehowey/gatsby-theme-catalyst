import React, { createContext, useContext, useState, useEffect } from "react"
import debounce from "lodash.debounce"

const WindowSizeContext = createContext(null)

export const WindowSizeProvider = ({ children }) => {
  if (typeof window !== "undefined") {
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
      window.addEventListener("resize", debounce(handleResize, 300))
      return () => {
        window.removeEventListener("resize", debounce(handleResize, 300))
      }
    }, [])

    return (
      <WindowSizeContext.Provider value={size}>
        {children}
      </WindowSizeContext.Provider>
    )
  }
}

export const useWindowSize = () => useContext(WindowSizeContext)
