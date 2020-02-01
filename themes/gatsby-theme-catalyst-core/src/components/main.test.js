import React from "react"
import renderer from "react-test-renderer"
import SiteMain from "./main"

describe("Main", () => {

  const props = {
    children: 'test'
  }

  it("renders correctly", () => {
    const tree = renderer
      .create(<SiteMain {...props} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})