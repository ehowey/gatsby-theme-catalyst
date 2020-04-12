/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { lighten } from "@theme-ui/color"

const AnimatedBlocks = () => {
  return (
    <div
      sx={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <Styled.h3 as="p" sx={{ mb: 0 }}>
        Gatsby Starter
      </Styled.h3>
      <Styled.p sx={{ mt: 0 }}>
        <i>Branding, colors, fonts, site metadata</i>
      </Styled.p>
      <div
        sx={{
          borderStyle: "dashed",
          borderWidth: "2px",
          borderColor: "text",
          p: 3,
        }}
      >
        <div
          sx={{
            width: "300px",
            height: "150px",
            bg: "#fdbf69",
            placeItems: "center",
            textAlign: "center",
            display: "grid",
            p: 2,
            mb: 2,
          }}
        >
          <Styled.h4 as="p">Presentation Theme</Styled.h4>
          <Styled.p>
            <i>Visual components, custom layouts and pages functions</i>
          </Styled.p>
        </div>
        <div
          sx={{
            width: "300px",
            height: "150px",
            bg: lighten("#fdbf69", 0.1),
            placeItems: "center",
            textAlign: "center",
            display: "grid",
            p: 2,
            mb: 2,
          }}
        >
          <Styled.h4 as="p">Data Theme</Styled.h4>
          <Styled.p>
            <i>Optional, add SANITY.io as a backend or just use MDX</i>
          </Styled.p>
        </div>
        <div
          sx={{
            width: "300px",
            height: "150px",
            bg: lighten("#fdbf69", 0.2),
            placeItems: "center",
            textAlign: "center",
            display: "grid",
            p: 2,
          }}
        >
          <Styled.h4 as="p">Layout Themes</Styled.h4>
          <Styled.p>
            <i>Minimal styles, defaults, layout and utility components</i>
          </Styled.p>
        </div>
      </div>
    </div>
  )
}

export default AnimatedBlocks
