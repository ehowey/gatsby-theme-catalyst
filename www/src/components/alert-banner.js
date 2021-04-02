// This is a placeholder for latent shadowing in sibling themes
// Copy and past this component and use theme shadowing in your starter site to customize the alert banner. You can see an example of this in the www folder.
/** @jsx jsx */
import { jsx, Themed, Button } from "theme-ui"
import { useContext } from "react"
import { useCatalystConfig, AlertContext } from "gatsby-theme-catalyst-core"
import { FiX } from "react-icons/fi"
import { Link } from "gatsby"

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
    <aside
      sx={{
        gridArea: "alert",
        width: "100%",
        bg: "#610303",
        color: "white",
        py: 2,
        px: 3,
        fontSize: 1,
      }}
      aria-label="Alert banner"
    >
      <div sx={{ display: "flex", justifyContent: "space-between" }}>
        <Themed.p sx={{ my: 0, lineHeight: "tight" }}>
          <span role="img" aria-label="Celebration Emoji" sx={{ mr: 2 }}>
            🎉
          </span>
          v6.0.0 is in beta, including support for Gatsby v3. Read the{" "}
          <Themed.a
            as={Link}
            to="/docs/migrating/"
            sx={{
              color: "white",
              ":hover, :active, :focus": { color: "fuchsia" },
            }}
          >
            migration guide
          </Themed.a>
          .
        </Themed.p>
        <Button
          onClick={() => setDisplayAlert(false)}
          sx={{
            flexShrink: "0",
            bg: "transparent",
            p: 1,
            cursor: "pointer",
            color: "white",
            display: "flex",
            alignItems: "center",
            ":hover, :focus, :active": {
              color: "fuchsia",
            },
          }}
        >
          <FiX />
        </Button>
      </div>
    </aside>
  )
}

export default AlertBanner
