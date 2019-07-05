import React from "react"
import { Layout, Main, Container, Footer } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Header from './header'

const siteLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <Header>
        <span>{data.site.siteMetadata.title}</span>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer>
        <h2>Here is the footer</h2>
      </Footer>
    </Layout>
  )
}

export default siteLayout