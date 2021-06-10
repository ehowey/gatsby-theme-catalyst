---
"gatsby-starter-catalyst-bery": major
"gatsby-starter-catalyst-hydrogen": major
"gatsby-starter-catalyst-sanity": major
"gatsby-theme-catalyst-sanity": major
"gatsby-starter-catalyst": major
"gatsby-starter-catalyst-blog": major
"gatsby-starter-catalyst-core": major
"gatsby-starter-catalyst-helium": major
"gatsby-starter-catalyst-lithium": major
"gatsby-theme-catalyst-bery": major
"gatsby-theme-catalyst-blog": major
"gatsby-theme-catalyst-core": major
"gatsby-theme-catalyst-footer": major
"gatsby-theme-catalyst-header-bigtop": major
"gatsby-theme-catalyst-header-side": major
"gatsby-theme-catalyst-header-top": major
"gatsby-theme-catalyst-helium": major
"gatsby-theme-catalyst-hydrogen": major
"gatsby-theme-catalyst-lithium": major
"gatsby-catalyst-docs": major
"gatsby-starter-catalyst-stripe": patch
"gatsby-theme-catalyst-stripe": patch
---

**BREAKING: Only affects sanity-based themes and starters**. This adds a more user friendly navigation link and social link structure in the sanity content studio. Due to this change in the content studio the sanity based themes all required some minor breaking changes in the studio schemas to support this improved ux. This is better for users over the long term, sorry for a breaking change!

**Migrating:** If you are not using SANITY, you can just upgrade. If you are using SANITY please see the [v7 migration guide](https://www.gatsbycatalyst.com/docs/migrating/). Migration will involve copy and pasting some new schemas into your sanity schema folder and then re-entering the navigation links and social links. As a result you will be able to drag/drop the order of navigation links and social links with a cleaner UI for content editors.
