import { useStaticQuery, graphql } from "gatsby"

export const useSanityConfig = () => {
  const { catalystSanityConfig } = useStaticQuery(
    graphql`
      query {
        catalystSanityConfig {
          sanityDataset
          sanityProjectId
          sanityToken
          useSanityPages
          useSanityPosts
          useSanityProjects
          postPath
          projectPath
        }
      }
    `
  )
  console.log(catalystSanityConfig)
  return {
    catalystSanityConfig,
  }
}
