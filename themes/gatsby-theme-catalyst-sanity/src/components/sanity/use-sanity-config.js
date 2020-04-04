import { useStaticQuery, graphql } from "gatsby"
export const useSanityConfig = () => {
  const { catalystSanityConfig } = useStaticQuery(
    graphql`
      query {
        catalystSanityConfig {
          sanityDataset
          sanityProjectId
          sanityToken
          sanityCreatePages
          sanityCreatePosts
          sanityCreatePostsList
          sanityCreateProjects
          sanityCreateProjectsList
          sanityPostPath
          sanityProjectPath
          useSanityTheme
        }
      }
    `
  )
  return catalystSanityConfig
}
