/** @jsx jsx */
import { jsx, Themed } from "theme-ui"

const HomeIntro = () => {
  return (
    <div>
      <Themed.p sx={{ fontSize: [4, null, 5, null, null], fontWeight: "500" }}>
        An opinionated set of integrated themes and starters to{" "}
        <span
          sx={{
            backgroundImage:
              "radial-gradient( circle farthest-corner at 10% 20%,  rgba(253,193,104,1) 0%, rgba(251,128,128,1) 90% )",
            px: 2,
            mr: 2,
            fontStyle: "italic",
          }}
        >
          accelerate
        </span>
        your next Gatsby project. Build faster.
      </Themed.p>
      <Themed.p
        sx={{
          fontSize: [4, null, 5, null, null],
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        11 themes
        <br />8 starters
      </Themed.p>
    </div>
  )
}

export default HomeIntro
