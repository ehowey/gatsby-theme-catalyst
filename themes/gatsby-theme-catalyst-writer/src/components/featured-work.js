/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./work-card"
import ButtonSecondary from "./button-secondary"

const FeaturedWork = () => {
  const data = useStaticQuery(graphql`
    query {
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
  return (
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
      <ButtonSecondary to="/work">More Published Work</ButtonSecondary>
    </div>
  )
}

export default FeaturedWork
