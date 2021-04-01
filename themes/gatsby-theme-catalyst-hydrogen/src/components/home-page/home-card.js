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
        borderRadius: 3,
      }}
      key={title}
    >
      <GatsbyImage
        image={image}
        sx={{
          mr: [0, null, 3, null, null],
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
        <p
          sx={{
            fontSize: "60%",
            textTransform: "uppercase",
            letterSpacing: "wider",
            m: 0,
          }}
        >
          {publisher} &middot; {date}
        </p>
        <Themed.h3
          sx={{
            mt: 0,
          }}
        >
          <a
            sx={{
              color: "text",
              textDecoration: "none",
              ":hover": {
                textDecoration: "underline",
              },
            }}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </Themed.h3>
        <p>{truncate(excerpt, { length: 300, separator: " " })}</p>
        <a
          sx={{
            color: "text",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "90%",
            "::after": {
              content: '"\\00A0 \\2192"',
            },
            ":hover": {
              textDecoration: "underline",
            },
          }}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read it
        </a>
      </div>
    </div>
  )
}

export default Card
