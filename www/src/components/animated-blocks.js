/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { baseColors } from "@theme-ui/preset-tailwind"
import { MdArrowUpward } from "react-icons/md"

const AnimatedBlocks = () => {
  return (
    <div
      sx={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <Styled.h3 as="p" sx={{ mb: 0 }}>
        Production Site
      </Styled.h3>
      <Styled.p sx={{ m: 0 }}>
        <i>Branding, content, customization</i>
      </Styled.p>
      <MdArrowUpward sx={{ fontSize: 4, mb: 2 }} />
      <Styled.h3 as="p" sx={{ m: 0 }}>
        Gatsby Starter
      </Styled.h3>
      <Styled.p sx={{ m: 0 }}>
        <i>Packages themes together</i>
      </Styled.p>
      <MdArrowUpward sx={{ fontSize: 4, mb: 2 }} />
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
            width: "300px",
            height: "150px",
            bg: "#fb8080",
            placeItems: "center",
            textAlign: "center",
            display: "grid",
            p: 2,
            mb: 2,
            color: baseColors.gray[8],
          }}
        >
          <Styled.h4 as="p">Presentation Theme</Styled.h4>
          <Styled.p>
            <i>Visual design, custom layouts and components</i>
          </Styled.p>
        </div>
        <div
          sx={{
            width: "300px",
            height: "150px",
            bg: "#fca473",
            placeItems: "center",
            textAlign: "center",
            display: "grid",
            p: 2,
            mb: 2,
            color: baseColors.gray[8],
          }}
        >
          <Styled.h4 as="p">Data Theme</Styled.h4>
          <Styled.p>
            <i>Optional, add a backend data source or just use MDX</i>
          </Styled.p>
        </div>
        <div
          sx={{
            width: "300px",
            height: "150px",
            bg: "#fdba6b",
            placeItems: "center",
            textAlign: "center",
            display: "grid",
            p: 2,
            color: baseColors.gray[8],
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
