/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { baseColors } from "@theme-ui/preset-tailwind"
import { MdArrowDownward } from "react-icons/md"

const AnimatedBlocks = ({ isDocs }) => {
  return (
    <div
      sx={{
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
      }}
    >
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: isDocs
            ? "column"
            : ["column", null, null, "row", null],
          justifyContent: "center",
          m: 4,
        }}
      >
        <div
          sx={{
            borderStyle: "dashed",
            borderWidth: "2px",
            borderColor: baseColors.gray[8],
            p: 3,
          }}
        >
          <Styled.h3 as="p" sx={{ mb: 2, mt: 0, textAlign: "center" }}>
            Themes
          </Styled.h3>
          <div
            sx={{
              minWidth: "240px",
              maxWidth: "330px",
              height: "170px",
              bg: "#fdba6b",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: [2, 3, null, null, null],
              mb: 2,
              color: baseColors.gray[8],
            }}
          >
            <Styled.h4 as="p" sx={{ mb: 2 }}>
              Layout Themes
            </Styled.h4>
            <Styled.p sx={{ m: 0 }}>
              <i>Minimal styles, defaults, layout and utility components</i>
            </Styled.p>
          </div>
          <div
            sx={{
              minWidth: "240px",
              maxWidth: "330px",
              height: "170px",
              bg: "#fca473",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: [2, 3, null, null, null],
              mb: 2,
              color: baseColors.gray[8],
            }}
          >
            <Styled.h4 as="p" sx={{ mb: 2 }}>
              Data Theme
            </Styled.h4>
            <Styled.p sx={{ m: 0 }}>
              <i>Optional, adds a backend data source or just use MDX</i>
            </Styled.p>
          </div>
          <div
            sx={{
              minWidth: "240px",
              maxWidth: "330px",
              height: "170px",
              bg: "#fb8080",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: [2, 3, null, null, null],
              color: baseColors.gray[8],
            }}
          >
            <Styled.h4 as="p" sx={{ mb: 2 }}>
              Presentation Theme
            </Styled.h4>
            <Styled.p sx={{ m: 0 }}>
              <i>Visual design, custom layouts and UI components</i>
            </Styled.p>
          </div>
        </div>
        <div
          sx={{
            display: "flex",
            flexDirection: isDocs
              ? "column"
              : ["column", null, null, "row", null],
            alignItems: isDocs
              ? "center"
              : ["center", null, null, "stretch", null],
            maxWidth: isDocs ? "330px" : ["330px", null, null, "100%", null],
          }}
        >
          <MdArrowDownward
            sx={{
              flexShrink: "0",
              fontSize: 4,
              m: 4,
              transform: isDocs
                ? "none"
                : ["none", null, null, "rotate(270deg)", null],
            }}
          />
          <div
            sx={{
              textAlign: isDocs
                ? "center"
                : ["center", null, null, "left", null, null],
              maxWidth: "330px",
            }}
          >
            <Styled.h3 as="p" sx={{ mt: 0, mb: 1 }}>
              Gatsby Starter
            </Styled.h3>
            <Styled.p sx={{ m: 0 }}>
              <i>Packages a set themes together for ease of use.</i>
            </Styled.p>
          </div>
          <MdArrowDownward
            sx={{
              flexShrink: "0",
              fontSize: 4,
              m: 4,
              transform: isDocs
                ? "none"
                : ["none", null, null, "rotate(270deg)", null],
            }}
          />
          <div
            sx={{
              textAlign: isDocs
                ? "center"
                : ["center", null, null, "left", null, null],
              maxWidth: "330px",
            }}
          >
            <Styled.h3 as="p" sx={{ mt: 0, mb: 1 }}>
              Production Site
            </Styled.h3>
            <Styled.p sx={{ m: 0 }}>
              <i>
                Add branding, content, styles, and customization. Component
                shadowing and Theme UI give you full control over the finished
                product.
              </i>
            </Styled.p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedBlocks
