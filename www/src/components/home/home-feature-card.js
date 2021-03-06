/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"

const HomeFeatureCard = ({ image, title, children }, props) => {
  return (
    <div {...props}>
      <GatsbyImage image={image} alt={title} />
      <Themed.h3
        sx={{
          fontSize: 3,
          mb: 3,
          "::after": {
            display: "block",
            content: '""',
            width: "40px",
            pt: 1,
            borderBottomStyle: "solid",
            borderBottomWidth: "2px",
            borderBottomColor: "primary",
          },
        }}
      >
        {title}
      </Themed.h3>
      <Themed.p>{children}</Themed.p>
    </div>
  )
}

export default HomeFeatureCard
