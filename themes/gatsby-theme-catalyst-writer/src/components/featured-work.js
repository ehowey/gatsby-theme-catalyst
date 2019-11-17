/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import ButtonSecondary from "./button-secondary";

const FeaturedWork = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityWork(
        sort: { order: DESC, fields: date }
        filter: { featured: { eq: true } }
      ) {
        nodes {
          title
          id
          link
          publisher
          date(formatString: "MMMM Do, YYYY")
          excerpt
          image {
            asset {
              fluid(maxWidth: 720) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);
  const writing = data.allSanityWork.nodes;
  return (
    <div
      sx={{
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        mt: 4,
        mb: 5,
        display: "grid"
      }}
    >
      <div
        sx={{
          zIndex: "5",
          width: "contentWidth",
          maxWidth: "maxContentWidth",
          m: "0 auto",
          gridColumn: "1 / -1",
          gridRow: "1 / -1"
        }}
      >
        {writing.map(published => (
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
              borderRadius: 3
            }}
            key={published.id}
          >
            <Img
              sx={{
                mr: [0, null, 3, null, null],
                maxWidth: ["100%", null, "250px", null, null],
                maxHeight: ["250px", null, "100%", null, null],
                flex: "1"
              }}
              fluid={published.image.asset.fluid}
              alt={published.title}
            />
            <div
              sx={{
                mt: [3, null, 0, null, null],
                flex: "2"
              }}
            >
              <p
                sx={{
                  fontSize: "60%",
                  textTransform: "uppercase",
                  m: 0
                }}
              >
                {published.publisher} &middot; {published.date}
              </p>
              <Styled.h3
                sx={{
                  mt: 0
                }}
              >
                <a
                  sx={{
                    color: "text",
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline"
                    }
                  }}
                  href={published.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {published.title}
                </a>
              </Styled.h3>
              <p>{published.excerpt.substring(0, 300) + "..."}</p>
              <a
                sx={{
                  color: "text",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "90%",
                  "::after": {
                    content: '"\\00A0 \\2192"'
                  },
                  ":hover": {
                    textDecoration: "underline"
                  }
                }}
                href={published.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read it
              </a>
            </div>
          </div>
        ))}
        <ButtonSecondary to="/work">More Published Work</ButtonSecondary>
      </div>
    </div>
  );
};

export default FeaturedWork;
