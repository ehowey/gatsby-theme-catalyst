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
import categories from "./categories"
import work from "./work"
import homePage from "./homePage"
import logos from "./logos"
import workPage from "./workPage"
import author from "./author"
import footerColors from "./footerColors"
import headerColors from "./headerColors"
import subMenu from "./subMenu"
import theme from "./theme"
import themeColors from "./themeColors"

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
    categories,
    work,
    homePage,
    logos,
    workPage,
    excerptBlockContent,
    author,
    theme,
    themeColors,
    footerColors,
    headerColors,
    subMenu,
  ]),
})
