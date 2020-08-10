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
          sanityCreateCategories
          sanityPostPath
          sanityPostsListPath
          sanityProjectPath
          sanityProjectsListPath
          useSanityTheme
          sanityPostListTitle
          sanityDisplayPostListTitle
        }
      }
    `
  )
  return catalystSanityConfig
}
