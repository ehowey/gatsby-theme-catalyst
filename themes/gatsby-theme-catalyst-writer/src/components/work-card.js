/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Img from "gatsby-image"

const Card = props => {
  return (
    <div
      sx={{
        width: ["100vw", "auto", null, null, null],
        position: ["relative", "static", null, null, null],
        left: ["calc(-50vw + 50%)", "0", null, null, null],
        display: "flex",
        flexDirection: ["column", null, "row", null, null],
        backgroundColor: "accent",
        p: 3,
        mb: 4,
        borderRadius: 3,
      }}
      key={props.title}
    >
      <Img
        sx={{
          mr: [0, null, 3, null, null],
          maxWidth: ["100%", null, "250px", null, null],
          maxHeight: ["250px", null, "100%", null, null],
          flex: "1",
        }}
        fluid={props.image}
        alt={props.title}
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
            m: 0,
          }}
        >
          {props.publisher} &middot; {props.date}
        </p>
        <Styled.h3
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
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.title}
          </a>
        </Styled.h3>
        <p>{props.excerpt.substring(0, 300) + "..."}</p>
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
          href={props.link}
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
