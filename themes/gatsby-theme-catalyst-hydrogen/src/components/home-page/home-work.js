/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./home-card"
import ButtonSecondary from "../button-secondary"
import { getGatsbyImageData } from "gatsby-source-sanity"
import { useSanityConfig } from "gatsby-theme-catalyst-sanity"

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
              id
            }
          }
        }
      }
    }
  `)
  const writing = data.allSanityWork.nodes
  const result = data.allSanityHomePage.nodes[0]
  const { sanityConfig } = useSanityConfig()
  return (
    <Fragment>
      <Themed.h2>{result.workTitle}</Themed.h2>
      <div
        sx={{
          mt: 4,
          mb: 5,
        }}
      >
        {writing.map((published) => {
          const writingImage = getGatsbyImageData(
            published.image.asset.id,
            { maxWidth: 200 },
            sanityConfig
          )
          return (
            <Card
              title={published.title}
              link={published.link}
              image={writingImage}
              publisher={published.publisher}
              date={published.date}
              excerpt={published.excerpt}
              key={published.id}
            />
          )
        })}
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
