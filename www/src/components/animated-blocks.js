/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { baseColors } from "@theme-ui/preset-tailwind"
import { MdArrowDownward } from "react-icons/md"

const AnimatedBlocks = () => {
  return (
    <section>
      <Styled.h2
        sx={{
          fontSize: 4,
          mb: 3,
          textAlign: "center",
          "::after": {
            display: "block",
            content: '""',
            width: "40px",
            pt: 2,
            borderBottomStyle: "solid",
            borderBottomWidth: "4px",
            borderBottomColor: "primary",
            mx: "auto",
          },
        }}
      >
        How It Works
      </Styled.h2>
      <Styled.p sx={{ textAlign: "center", fontSize: 3 }}>
        Choose a set of themes, customize the project with component shadowing,
        style your masterpiece with Theme UI, and then maintain it all with npm
        package updates.
      </Styled.p>
      <div
        sx={{
          mt: 4,
          display: "grid",
          placeItems: "center",
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
              <i>Optional, add a backend data source or just use MDX</i>
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
              <i>Visual design, custom layouts and components</i>
            </Styled.p>
          </div>
        </div>
        <MdArrowDownward sx={{ fontSize: 4, my: 3 }} />
        <Styled.h3 as="p" sx={{ m: 0 }}>
          Gatsby Starter
        </Styled.h3>
        <Styled.p sx={{ m: 0 }}>
          <i>Packages themes together</i>
        </Styled.p>
        <MdArrowDownward sx={{ fontSize: 4, my: 3 }} />
        <Styled.h3 as="p" sx={{ m: 0 }}>
          Production Site
        </Styled.h3>
        <Styled.p sx={{ m: 0 }}>
          <i>Branding, content, customization</i>
        </Styled.p>
      </div>
    </section>
  )
}

export default AnimatedBlocks
