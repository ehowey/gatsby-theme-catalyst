import { useStaticQuery, graphql } from "gatsby"

export const useSanityConfig = () => {
  const data = useStaticQuery(
    graphql`
      query {
        catalystSanityConfig {
          sanityDataset
          sanityProjectId
          sanityToken
        }
      }
    `
  )
  return {
    projectId: data.catalystSanityConfig.sanityProjectId,
    dataset: data.catalystSanityConfig.sanityDataset,
  }
}
