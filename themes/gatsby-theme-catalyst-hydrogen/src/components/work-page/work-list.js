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
            id
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
          date(formatString: "MMMM YYYY")
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
        <div sx={{ mb: 5 }} key={node.id}>
          <Styled.h3>{node.title}</Styled.h3>
          <ul
            sx={{
              listStyle: "none",
              m: 0,
              p: 0,
              mt: 3,
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
                    key={published.id}
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
