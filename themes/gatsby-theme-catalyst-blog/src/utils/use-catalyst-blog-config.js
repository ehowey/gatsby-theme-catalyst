import { useStaticQuery, graphql } from "gatsby"
export const useCatalystBlogConfig = () => {
  const { catalystBlogConfig } = useStaticQuery(
    graphql`
      query {
        catalystBlogConfig {
          postListTitle
        }
      }
    `
  )
  return catalystBlogConfig
}
