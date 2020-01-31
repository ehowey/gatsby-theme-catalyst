import React from "react"
import renderer from "react-test-renderer"
import SiteFooter from "./footer"
describe("Footer", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SiteFooter />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})