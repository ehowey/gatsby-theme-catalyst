// This is a placeholder for latent shadowing in sibling themes
// Copy and past this component and use theme shadowing in your starter site to customize the alert banner. You can see an example of this in the www folder.
/** @jsx jsx */
import { jsx, Themed, Button } from "theme-ui"
import { useState } from "react"

const AlertBanner = () => {
  const [hasAlert, setHasAlert] = useState(true)

  if (!hasAlert) {
    return null
  }

  return (
    <aside sx={{ gridArea: "alert", width: "100%", bg: "tomato" }}>
      <div sx={{ display: "flex", justifyContent: "space-between" }}>
        <Themed.p sx={{ m: 1 }}>Alert banner</Themed.p>
        <Button onClick={() => setHasAlert(false)}>Close</Button>
      </div>
    </aside>
  )
}

export default AlertBanner
