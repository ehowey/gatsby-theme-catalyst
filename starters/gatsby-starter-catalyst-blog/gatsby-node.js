// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MdxBlogPost`) {
//     const parent = getNode(node.parent)
//     createNodeField({
//       node,
//       name: "featuredImage",
//       value: parent.frontmatter.featuredImage,
//     })
//   }
// }

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type MdxBlogPost implements Node @infer {
//       fields: MdxBlogPostFields
//     }
//     type MdxBlogPostFields @infer {
//       featuredImage: File @fileByRelativePath
//     }
//   `
//   createTypes(typeDefs)
// }
