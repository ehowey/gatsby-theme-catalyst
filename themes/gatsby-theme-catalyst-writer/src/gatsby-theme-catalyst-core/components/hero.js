/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { Fragment } from "react";
import { useContext } from "react";
import { HomeContext } from "gatsby-theme-catalyst-core";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityHomePage(limit: 1) {
        nodes {
          id
          heroTitle
          heroText
          heroImage {
            asset {
              fluid(maxWidth: 1024) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);
  const [isHome] = useContext(HomeContext);
  const hero = data.allSanityHomePage.nodes;
  if (isHome) {
    return (
      <div
        sx={{
          width: "100%",
          backgroundColor: "accent",
          mb: 4
        }}
      >
        <div
          sx={{
            display: "flex",
            flexDirection: ["column", null, "row", null, null],
            width: "100%",
            height: ["auto", null, "70vh", null, null],
            backgroundColor: "accent",
            maxWidth: "maxPageWidth",
            mx: "auto",
            my: 0
          }}
        >
          {hero.map(content => (
            <Fragment key={content.id}>
              <Img
                sx={{
                  width: "100%",
                  height: ["300px", null, "100%", null, null]
                }}
                fluid={content.heroImage.asset.fluid}
                alt={hero.title}
              />
              <div
                sx={{
                  alignSelf: "center",
                  py: [5, null, 4, null, null],
                  px: [3, null, 4, null, null]
                }}
              >
                <Styled.h1
                  sx={{
                    borderColor: "secondary",
                    borderTopWidth: "8px",
                    borderBottomWidth: "8px",
                    borderTopStyle: "dotted",
                    borderBottomStyle: "dotted",
                    py: 3,
                    mt: 0,
                    mb: 4
                  }}
                >
                  {content.heroTitle}
                </Styled.h1>
                <Styled.p sx={{ mt: 0, mb: 4 }}>{content.heroText}</Styled.p>
                <div
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gridTemplateRows: "auto",
                    gridGap: ["1rem", null, null, "2rem", null]
                  }}
                >
                  <Link
                    sx={{
                      gridColumn: "1 / 2",
                      justifySelf: "start",
                      alignSelf: "center",
                      appearance: "none",
                      width: "auto",
                      bg: "primary",
                      color: "textWhite",
                      display: "inline-block",
                      textAlign: "center",
                      lineHeight: "inherit",
                      textDecoration: "none",
                      fontSize: "85%",
                      m: 0,
                      px: "0.8rem",
                      py: "0.5rem",
                      borderColor: "primary",
                      borderWidth: "2px",
                      borderStyle: "solid",
                      borderRadius: 4,
                      letterSpacing: "1px",
                      transition: "all 0.3s ease 0s",
                      "::after": {
                        content: '"\\00A0 \\2192"'
                      },
                      ":hover": {
                        bg: "secondary",
                        borderColor: "secondary"
                      }
                    }}
                    to="/work"
                  >
                    Published Work
                  </Link>
                  <Link
                    sx={{
                      gridColumn: "2 / 3",
                      justifySelf: "start",
                      alignSelf: "center",
                      appearance: "none",
                      width: "auto",
                      bg: "transparent",
                      color: "primary",
                      display: "inline-block",
                      textAlign: "center",
                      lineHeight: "inherit",
                      textDecoration: "none",
                      fontSize: "85%",
                      m: 0,
                      px: "0.8rem",
                      py: "0.5rem",
                      borderColor: "primary",
                      borderWidth: "2px",
                      borderStyle: "solid",
                      borderRadius: 4,
                      letterSpacing: "1px",
                      transition: "all 0.3s ease 0s",
                      "::after": {
                        content: '"\\00A0 \\2192"'
                      },
                      ":hover": {
                        borderColor: "secondary",
                        color: "secondary"
                      }
                    }}
                    to="/bio"
                  >
                    Bio
                  </Link>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Hero;
