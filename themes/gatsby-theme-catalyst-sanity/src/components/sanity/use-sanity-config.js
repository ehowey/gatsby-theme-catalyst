import { useStaticQuery, graphql } from "gatsby"
export const useSanityConfig = () => {
  const { catalystSanityConfig } = useStaticQuery(
    graphql`
      query {
        catalystSanityConfig {
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
          useSanityTheme
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
