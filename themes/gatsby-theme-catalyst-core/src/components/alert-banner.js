// This is a placeholder for latent shadowing in sibling themes
// Copy and past this component and use theme shadowing in your starter site to customize the alert banner. You can see an example of this in the www folder.
/** @jsx jsx */
import { jsx, Themed, Button } from "theme-ui"
import { useContext } from "react"
import { useCatalystConfig, AlertContext } from "gatsby-theme-catalyst-core"

const AlertBanner = () => {
  const { useAlertBanner } = useCatalystConfig()
  const [displayAlert, setDisplayAlert] = useContext(AlertContext)

  if (!useAlertBanner) {
    return null
  }

  if (!displayAlert) {
    return null
  }

  return (
    <aside sx={{ gridArea: "alert", width: "100%", bg: "tomato" }}>
      <div sx={{ display: "flex", justifyContent: "space-between" }}>
        <Themed.p sx={{ m: 1 }}>Alert banner</Themed.p>
        <Button onClick={() => setDisplayAlert(false)}>Close</Button>
      </div>
    </aside>
  )
}

export default AlertBanner
