import { useStaticQuery, graphql } from "gatsby"

export const useSanityConfig = () => {
  const data = useStaticQuery(
    graphql`
      query {
        catalystWriterConfig {
          sanityDataset
          sanityProjectID
        }
      }
    `
  )
  return {
    projectId: data.catalystWriterConfig.sanityProjectID,
    dataset: data.catalystWriterConfig.sanityDataset,
  }
}
