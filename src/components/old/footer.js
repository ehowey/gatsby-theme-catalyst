import React from 'react'
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby"

const FooterComponent = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: ${props => props.theme.color.secondary};
  color: ${props => props.theme.color.textWhite};
`

const siteFooter = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `)
    return (
        <FooterComponent>
          <p><i>CATALYST:</i> a substance that increases the rate of a chemical reaction without itself undergoing any permanent chemical change.</p>
          <p>Created by {data.site.siteMetadata.author}.</p>
        </FooterComponent>
    )
}

export default siteFooter