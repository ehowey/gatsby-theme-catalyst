/** @jsx jsx */
import { jsx, Styled, Grid } from "theme-ui"

const Features = () => {
  return (
    <div
      sx={{
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        px: 4,
      }}
    >
      <Grid
        columns={[1, 1, 3, null, null]}
        gap={4}
        sx={{
          margin: "0 auto",
          maxWidth: "maxPageWidth",
        }}
      >
        <div>
          <Styled.h3>Layout Themes</Styled.h3>
          <Styled.p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            porta dolor sed velit ullamcorper, in dignissim augue vulputate.
            Nulla dolor nisl, lobortis eget ultrices sit amet, malesuada nec
            dolor. Ut velit sapien, egestas ut lectus in, hendrerit malesuada
            nulla. Suspendisse potenti.{" "}
          </Styled.p>
        </div>
        <div>
          <Styled.h3>Feature Flags</Styled.h3>
          <Styled.p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            porta dolor sed velit ullamcorper, in dignissim augue vulputate.
            Nulla dolor nisl, lobortis eget ultrices sit amet, malesuada nec
            dolor. Ut velit sapien, egestas ut lectus in, hendrerit malesuada
            nulla. Suspendisse potenti.{" "}
          </Styled.p>
        </div>
        <div>
          <Styled.h3>SANITY.io</Styled.h3>
          <Styled.p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            porta dolor sed velit ullamcorper, in dignissim augue vulputate.
            Nulla dolor nisl, lobortis eget ultrices sit amet, malesuada nec
            dolor. Ut velit sapien, egestas ut lectus in, hendrerit malesuada
            nulla. Suspendisse potenti.{" "}
          </Styled.p>
        </div>
      </Grid>
    </div>
  )
}

export default Features
