// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// We import object and document schemas
import categories from "./categories"
import work from "./work"
import logos from "./logos"
import homePage from "./homePage"
import workPage from "./workPage"
import bioPage from "./bioPage"
import contactPage from "./contactPage"
import blockContent from "./blockContent"
import figure from "./figure"
import figureWide from "./figureWide"
import siteSettings from "./siteSettings"
import menuLink from "./menuLink"
import socialLink from "./socialLink"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    work,
    categories,
    logos,
    homePage,
    workPage,
    bioPage,
    contactPage,
    blockContent,
    figure,
    figureWide,
    siteSettings,
    menuLink,
    socialLink,
  ]),
})
