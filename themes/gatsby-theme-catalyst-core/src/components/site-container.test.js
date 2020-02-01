import React from "react"
import renderer from "react-test-renderer"
import SiteContainer from "./site-container"

describe("Header", () => {
  it("renders correctly", () => {

    const props = {
        children: 'test'
    }
    
    const tree = renderer
      .create(<SiteContainer {...props} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})