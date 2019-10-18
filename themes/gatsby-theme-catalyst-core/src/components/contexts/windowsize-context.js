import React, { createContext, useContext, useState, useEffect } from "react"
import debounce from "lodash.debounce"

let defaultHeight
let defaultWidth

if (typeof window !== `undefined`) {
  defaultHeight = window.innerHeight
  defaultWidth = window.innerWidth
}

const WindowSizeContext = createContext(null)

export const WindowSizeProvider = ({ children }) => {
  const [size, setSize] = useState({
    width: defaultWidth,
    height: defaultHeight,
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

export const useWindowSize = () => useContext(WindowSizeContext)
