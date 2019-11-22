/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import WorkLi from "./work-list-item"

const SelectedWork = () => {
  const data = useStaticQuery(graphql`
    query {
      categories: allSanityCategories(sort: { order: ASC, fields: order }) {
        edges {
          node {
            title
          }
        }
      }
      allwork: allSanityWork(
        filter: { include: { eq: true } }
        sort: { fields: date, order: DESC }
      ) {
        nodes {
          title
          id
          link
          publisher
          date
          categories {
            title
          }
        }
      }
    }
  `)

  const categories = data.categories.edges
  const writing = data.allwork.nodes

  return (
    <Fragment>
      {categories.map(({ node }) => (
        <div sx={{ mb: 5 }}>
          <Styled.h3>{node.title}</Styled.h3>
          <ul
            sx={{
              listStyle: "none",
              m: 0,
              p: 0,
            }}
          >
            {writing.map(published =>
              published.categories
                .filter(category => category.title === node.title)
                .map(() => (
                  <WorkLi
                    title={published.title}
                    link={published.link}
                    publisher={published.publisher}
                    date={published.date}
                  />
                ))
            )}
          </ul>
        </div>
      ))}
    </Fragment>
  )
}

export default SelectedWork
