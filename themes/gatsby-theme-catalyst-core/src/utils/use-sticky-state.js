import { useState, useEffect } from "react"
import { useHasMounted } from "gatsby-theme-catalyst-core"

export const useStickyState = (defaultValue, key) => {
  const hasMounted = useHasMounted()

  const [value, setValue] = useState(() => {
    const stickyValue = hasMounted && window.localStorage.getItem(key)
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue
  })
  useEffect(() => {
    hasMounted && window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  return [value, setValue]
}
