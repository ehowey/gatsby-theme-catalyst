import React from "react"
import renderer from "react-test-renderer"
import ContentContainer from "./content-container"

describe("ContentContainer", () => {

  const props = {
    children: 'test'
  }

  it("renders correctly", () => {
    const tree = renderer
      .create(<ContentContainer {...props} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})