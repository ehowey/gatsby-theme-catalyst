/** @jsx jsx */
import { jsx, Themed, Button } from "theme-ui"
import { Link } from "gatsby"
import { baseColors } from "@theme-ui/preset-tailwind"

const Why = () => {
  return (
    <div sx={{ mx: "auto" }}>
      <Themed.p
        sx={{
          fontSize: [3, null, 4, null, null],
        }}
      >
        Because I needed a way to speed up my freelance developer workflow and
        open source is empowering!
      </Themed.p>
      <Themed.p sx={{ fontSize: [3, null, 4, null, null] }}>
        <i>
          <b>catalyst:</b> an agent that provokes or speeds significant change
          or action
        </i>
      </Themed.p>

      <div sx={{ display: "grid", placeItems: "center" }}>
        <Button
          as={Link}
          sx={{
            fontSize: 2,
            backgroundImage:
              "radial-gradient( circle farthest-corner at 10% 20%,  rgba(253,193,104,1) 0%, rgba(251,128,128,1) 90% )",
            color: baseColors.gray[8],
            fontWeight: "bold",
            boxShadow: "default",
            transition: "all 0.3s ease",
            ":hover, :focus, :active": {
              boxShadow: "lg",
              backgroundImage:
                "radial-gradient( circle farthest-corner at 30% 40%,  rgba(253,193,80,1) 0%, rgba(251,128,100,1) 95% )",
            },
          }}
          to="/docs/getting-started"
        >
          BOOM! Get Started!
        </Button>
      </div>
    </div>
  )
}

export default Why
