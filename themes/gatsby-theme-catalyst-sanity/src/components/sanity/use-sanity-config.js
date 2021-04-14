import { useStaticQuery, graphql } from "gatsby"
export const useSanityConfig = () => {
  const { catalystSanityConfig } = useStaticQuery(
    graphql`
      query {
        catalystSanityConfig {
          sanityProjectId
          sanityDataset
          sanityCreatePages
          sanityCreatePosts
          sanityCreatePostsList
          sanityCreateProjects
          sanityCreateProjectsList
          sanityCreateCategories
          sanityPostPath
          sanityPostListPath
          sanityProjectPath
          sanityProjectListPath
          sanityPostListTitle
          sanityDisplayPostListTitle
          sanityProjectListTitle
          sanityDisplayProjectListTitle
        }
      }
    `
  )
  return catalystSanityConfig
}
