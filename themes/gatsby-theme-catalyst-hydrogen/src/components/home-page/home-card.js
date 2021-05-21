/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"
import { truncate } from "lodash"

const Card = ({ title, image, publisher, date, link, excerpt }) => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: ["column", null, "row", null, null],
        width: ["100vw", "auto", null, null, null],
        position: ["relative", "static", null, null, null],
        left: ["calc(-50vw + 50%)", "auto", null, null, null],
        backgroundColor: "accent",
        p: 3,
        mb: 4,
        borderRadius: ["0px", "4px", null, null, null],
        boxShadow: "sm",
      }}
      key={title}
    >
      <GatsbyImage
        image={image}
        sx={{
          mr: [0, null, 3, null, null],
          borderRadius: "4px",
          maxWidth: ["100%", null, "250px", null, null],
          maxHeight: ["250px", null, "100%", null, null],
          flex: "1",
        }}
        alt={title}
      />
      <div
        sx={{
          mt: [3, null, 0, null, null],
          flex: "2",
        }}
      >
        <Themed.p
          sx={{
            fontSize: 0,
            color: "textGray",
            textTransform: "uppercase",
            letterSpacing: "wider",
            m: 0,
          }}
        >
          {publisher} &middot; {date}
        </Themed.p>
        <Themed.h3
          sx={{
            fontSize: 3,
            mt: 0,
          }}
        >
          <Themed.a
            sx={{
              color: "text",
              textDecoration: "none",
              ":hover": {
                color: "text",
                textDecoration: "underline",
              },
            }}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </Themed.a>
        </Themed.h3>
        <Themed.p>
          {truncate(excerpt, { length: 300, separator: " " })}
        </Themed.p>
        <Themed.a
          sx={{
            fontSize: 2,
            color: "text",
            textDecoration: "none",
            fontWeight: "bold",
            "::after": {
              content: '"\\00A0 \\2192"',
            },
            ":hover": {
              color: "text",
              textDecoration: "underline",
            },
          }}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read it
        </Themed.a>
      </div>
    </div>
  )
}

export default Card
