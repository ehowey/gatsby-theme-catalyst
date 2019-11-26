/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Fragment } from "react"
import Img from "gatsby-image"

const PageHeader = props => {
  return (
    <Fragment>
      <Img
        sx={{
          height: ["150px", "200px", null, null, null],
        }}
        fluid={props.topImage}
        alt={props.topImageAlt}
      />
      <Styled.h1>{props.title}</Styled.h1>
    </Fragment>
  )
}

export default PageHeader
