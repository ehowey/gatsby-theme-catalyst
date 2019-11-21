// import { useStaticQuery, graphql } from "gatsby"

// const SanityClient = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allCatalystWriterConfig {
//         nodes {
//           sanityDataset
//           sanityProjectID
//         }
//       }
//     }
//   `)
//   const clientConfig = {
//     projectId: "utcr8kb1",
//     dataset: "production",
//   }
//   console.log(clientConfig)
//   return clientConfig
// }

// export default SanityClient

module.exports = {
  sanity: {
    projectId: "utcr8kb1",
    dataset: "production",
  },
}
