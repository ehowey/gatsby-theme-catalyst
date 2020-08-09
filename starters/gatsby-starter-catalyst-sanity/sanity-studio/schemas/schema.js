// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// We import object and document schemas
import blockContent from "./blockContent"
import excerptBlockContent from "./excerptBlockContent"
import figure from "./figure"
import figureWide from "./figureWide"
import siteSettings from "./siteSettings"
import menuLink from "./menuLink"
import socialLink from "./socialLink"
import page from "./page"
import post from "./post"
import project from "./project"
import author from "./author"
import subMenu from "./subMenu"
import theme from "./theme"
import themeColors from "./themeColors"
import footerColors from "./footerColors"
import headerColors from "./headerColors"
import category from "./category"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    blockContent,
    figure,
    figureWide,
    siteSettings,
    menuLink,
    socialLink,
    page,
    post,
    project,
    excerptBlockContent,
    author,
    subMenu,
    theme,
    themeColors,
    headerColors,
    footerColors,
    category,
  ]),
})
