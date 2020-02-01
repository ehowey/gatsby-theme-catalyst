import React from "react"
import renderer from "react-test-renderer"
import SiteLayout from "./layout"
import { useStaticQuery, StaticQuery } from 'gatsby';
import catalystConfig from "../../../../jest/__mocks__/site-config"

describe("Header", () => {
  const props = {
    children: 'test',
    ...catalystConfig,
  }



  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }) => (
        render(props)
      ),
      useStaticQuery.mockReturnValue(props)
    );
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(<SiteLayout {...props}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})