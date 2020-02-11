/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./work-card"
import ButtonSecondary from "./button-secondary"

const FeaturedWork = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityHomePage(limit: 1, sort: { fields: _updatedAt, order: DESC }) {
        nodes {
          workTitle
        }
      }
      allSanityWork(
        sort: { order: DESC, fields: date }
        filter: { featured: { eq: true } }
      ) {
        nodes {
          id
          title
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
  `)
  const writing = data.allSanityWork.nodes
  const result = data.allSanityHomePage.nodes[0]
  return (
    <Fragment>
      <Styled.h2>{result.workTitle}</Styled.h2>
      <div
        sx={{
          mt: 4,
          mb: 5,
        }}
      >
        {writing.map(published => (
          <Card
            title={published.title}
            link={published.link}
            image={published.image.asset.fluid}
            publisher={published.publisher}
            date={published.date}
            excerpt={published.excerpt}
            key={published.id}
          />
        ))}
        <div
          sx={{
            display: "grid",
            justifyItems: ["stretch", "start", null, null, null],
          }}
        >
          <ButtonSecondary to="/work">More Published Work</ButtonSecondary>
        </div>
      </div>
    </Fragment>
  )
}

export default FeaturedWork
