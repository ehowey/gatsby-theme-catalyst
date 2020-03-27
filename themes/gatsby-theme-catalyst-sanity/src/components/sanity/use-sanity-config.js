import { useStaticQuery, graphql } from "gatsby"
export const useSanityConfig = () => {
  const { catalystSanityConfig } = useStaticQuery(
    graphql`
      query {
        catalystSanityConfig {
          sanityDataset
          sanityProjectId
          sanityToken
          createSanityPages
          createSanityPosts
          createSanityPostsList
          createSanityProjects
          createSanityProjectsList
          postPath
          projectPath
        }
      }
    `
  )
  return catalystSanityConfig
}
